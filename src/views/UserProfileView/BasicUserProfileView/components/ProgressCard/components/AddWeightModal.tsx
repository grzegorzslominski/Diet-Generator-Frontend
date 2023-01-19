import { useQueryClient } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";

import {
    NEW_WEIGHT_DATA,
    NEW_WEIGHT_VALIDATION_DATA,
    UserWeightRecord,
} from "../../../../../../models/User/UserStatistics";
import {
    getAllWeightRecordsIDByDay,
    parseUserWeightStats,
} from "../../../../../../helpers/statistics";
import { ENDPOINTS_PROFILE, ENDPOINTS_USER } from "../../../../../../navigation/endpoints";
import { ReactComponent as RemoveIcon } from "../../../../../../assets/icons/XIcon.svg";
import { setNotification } from "../../../../../../redux/slices/notification";
import { parseUnixTime } from "../../../../../AuthViews/helpers/date";
import { mainTheme } from "../../../../../../themes/mainTheme";
import { getUserData } from "../../../../../../models/User/User";
import { setUser } from "../../../../../../redux/slices/user";

import ModalPortal from "../../../../../../components/UI/ModalPortal/ModalPortal";
import axiosFoodieInstance from "../../../../../../axios/axiosFoodieInstance";
import ScrollBox from "../../../../../../components/UI/ScrollBox/ScrollBox";
import Spinner from "../../../../../../components/UI/Spinner/Spinner";
import Button from "../../../../../../components/UI/Button/Button";
import BoxPad from "../../../../../../components/UI/BoxPad/BoxPad";
import Label from "../../../../../../components/UI/Label/Label";
import Input from "../../../../../../components/UI/Input/Input";

import * as S from "./AddWeightModal.style";

type AddWeightModal = {
    weightStats?: UserWeightRecord[];
    weightStatsIsLoading: boolean;
    close: () => void;
};

const AddWeightModal = ({ weightStats, close, weightStatsIsLoading }: AddWeightModal) => {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();

    const parsedUserWeightStats = useMemo(
        () => (weightStats ? parseUserWeightStats(weightStats) : []),
        [weightStats],
    );
    const [newWeightRecord, setNewWeightRecord] = useState(
        JSON.parse(JSON.stringify(NEW_WEIGHT_DATA)),
    );
    const [newWeightRecordValidation, setNewWeightRecordValidation] = useState(
        JSON.parse(JSON.stringify(NEW_WEIGHT_VALIDATION_DATA)),
    );
    const [addingIsLoading, setAddingIsLoading] = useState(false);
    const [removeingIsLoading, setRemovingIsLoading] = useState<number | null>(null);

    const onChange = (property: string, value: any) => {
        const currentNewWeightRecord = JSON.parse(JSON.stringify(newWeightRecord));
        const currentValidation = JSON.parse(JSON.stringify(newWeightRecordValidation));
        currentNewWeightRecord[property] = value;
        currentValidation[property] = "";

        setNewWeightRecord(currentNewWeightRecord);
        setNewWeightRecordValidation(currentValidation);
    };

    const valideteData = () => {
        const currentValidation = JSON.parse(JSON.stringify(newWeightRecordValidation));
        const currentNewWeightRecord = JSON.parse(JSON.stringify(newWeightRecord));
        let validationPassed = true;

        Object.keys(currentValidation).forEach((key) => {
            if (!currentNewWeightRecord[key]) {
                validationPassed = false;
                currentValidation[key] = "This field is required";
            }
        });
        setNewWeightRecordValidation(currentValidation);
        return validationPassed;
    };

    const addWeightRecord = async () => {
        setAddingIsLoading(true);
        const validationPassed = valideteData();

        if (validationPassed) {
            const data = JSON.parse(JSON.stringify(newWeightRecord));
            data.timestamp =
                (moment(data.date).format("DD/MM/YYYY") === moment().format("DD/MM/YYYY")
                    ? moment().unix()
                    : moment(data.date).unix()) * 1000;

            delete data.date;
            await weightRecordAction("add", data);
        }
        setAddingIsLoading(false);
    };

    const removeWeightRecord = async (weightRecordIndex: number) => {
        if (!weightStats) {
            return;
        }
        setRemovingIsLoading(weightRecordIndex);

        const weightRecordsID = getAllWeightRecordsIDByDay(
            weightStats,
            parseUnixTime(parsedUserWeightStats[weightRecordIndex].timestamp),
        );
        await weightRecordAction("delete", weightRecordsID);
        setRemovingIsLoading(null);
    };

    const weightRecordAction = async (
        type: "add" | "delete",
        data: UserWeightRecord | number[],
    ) => {
        const requestConfig = {
            url: type === "add" ? ENDPOINTS_USER.userInfo : ENDPOINTS_PROFILE.weightStats,
            method: type === "add" ? "post" : "delete",
            data,
        };

        await axiosFoodieInstance(requestConfig)
            .then(async (response) => {
                if (response.status === 200 || response.status === 202) {
                    queryClient.invalidateQueries(["weightStats"], {
                        refetchType: "all",
                    });
                    queryClient.invalidateQueries(["userBasicProfile"], {
                        refetchType: "all",
                    });
                    dispatch(
                        setNotification({
                            label: "Weight history",
                            header: "Success",
                            message: type === "add" ? "Weight was added" : "Weight entry deleted",
                            timeout: 5000,
                        }),
                    );
                    if (type === "add") {
                        setNewWeightRecord(JSON.parse(JSON.stringify(NEW_WEIGHT_DATA)));
                        const freshUserData = await getUserData();
                        if (freshUserData) {
                            dispatch(setUser(freshUserData));
                        }
                    }
                }
            })
            .catch((err) => {
                const errorMessage = err.response.data?.message
                    ? err.response.data.message
                    : "The action cannot be performed";

                dispatch(
                    setNotification({
                        label: "Register",
                        header: "Failed",
                        message: errorMessage,
                        timeout: 5000,
                    }),
                );
            });
    };

    return (
        <ModalPortal close={close} blurBackground blurLevel='normal'>
            <BoxPad header='Add weight' gap='30px'>
                <S.Container>
                    <S.NewWeightRecordContainer>
                        <S.DataInputsContainer>
                            <Input
                                type='number'
                                onChange={(e) => onChange("weight", e.target.value)}
                                label='Weight'
                                value={newWeightRecord.weight}
                                error={newWeightRecordValidation.weight}
                                size='small'
                            />
                            <Input
                                type='date'
                                label='Date'
                                value={newWeightRecord.date}
                                onChange={(value) => onChange("date", value)}
                                error={newWeightRecordValidation.date}
                                size='small'
                            />
                        </S.DataInputsContainer>
                        <Button
                            onClick={addWeightRecord}
                            width='80px'
                            size='small'
                            styleType='primaryEmpty'
                            fontSize='14px'
                            isLoading={addingIsLoading}
                        >
                            Add
                        </Button>
                    </S.NewWeightRecordContainer>
                    <S.WeightRecordsContainer>
                        <Label fontSize='14px' color={mainTheme.colors.mainBlack}>
                            Weight history
                        </Label>
                        <ScrollBox height={250} scrollDistance={30}>
                            <S.WeightRecordsContent
                                weightHistory={Boolean(parsedUserWeightStats.length)}
                            >
                                {weightStatsIsLoading ? (
                                    <Spinner />
                                ) : (
                                    <>
                                        {!parsedUserWeightStats.length ? (
                                            <S.EmptyContainer>
                                                <Label
                                                    fontSize='12px'
                                                    color={mainTheme.colors.grey}
                                                >
                                                    No weight history
                                                </Label>
                                            </S.EmptyContainer>
                                        ) : (
                                            parsedUserWeightStats.map((weightStat, index) => (
                                                <S.WeightRecord
                                                    key={weightStat.id}
                                                    isLoading={removeingIsLoading === index}
                                                >
                                                    <S.WeightRecordContent>
                                                        <Label
                                                            fontSize='12px'
                                                            lineHeight='14px'
                                                            fontWeight='500'
                                                            color={mainTheme.colors.mainBlack}
                                                        >
                                                            {index + 1}
                                                        </Label>
                                                        <Label
                                                            fontSize='12px'
                                                            lineHeight='14px'
                                                            color={mainTheme.colors.mainBlack}
                                                        >
                                                            {parseUnixTime(weightStat.timestamp)}
                                                        </Label>
                                                        <Label
                                                            fontSize='14px'
                                                            lineHeight='14px'
                                                            fontWeight='500'
                                                            color={mainTheme.colors.mainBlack}
                                                        >
                                                            {weightStat.weight} kg
                                                        </Label>
                                                    </S.WeightRecordContent>
                                                    {index > 0 && (
                                                        <S.ActionContainer>
                                                            {removeingIsLoading === index ? (
                                                                <Spinner
                                                                    size='small'
                                                                    color='secondary'
                                                                />
                                                            ) : (
                                                                <RemoveIcon
                                                                    onClick={() =>
                                                                        removeWeightRecord(index)
                                                                    }
                                                                />
                                                            )}
                                                        </S.ActionContainer>
                                                    )}
                                                </S.WeightRecord>
                                            ))
                                        )}
                                    </>
                                )}
                            </S.WeightRecordsContent>
                        </ScrollBox>
                    </S.WeightRecordsContainer>
                </S.Container>
            </BoxPad>
        </ModalPortal>
    );
};

export default AddWeightModal;
