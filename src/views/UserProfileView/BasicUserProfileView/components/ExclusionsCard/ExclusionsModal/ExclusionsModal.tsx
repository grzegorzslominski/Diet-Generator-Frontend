import { useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { mainTheme } from "../../../../../../themes/mainTheme";
import axiosFoodieInstance from "../../../../../../axios/axiosFoodieInstance";
import { ENDPOINTS_MEALS } from "../../../../../../navigation/endpoints";
import { AxiosError } from "axios";
import { setNotification } from "../../../../../../redux/slices/notification";

import SearchProducts from "../../../../../../components/SearchProducts/SearchProducts";
import ScrollBox from "../../../../../../components/UI/ScrollBox/ScrollBox";
import ModalPortal from "../../../../../../components/UI/ModalPortal/ModalPortal";
import BoxPad from "../../../../../../components/UI/BoxPad/BoxPad";
import Label from "../../../../../../components/UI/Label/Label";
import Button from "../../../../../../components/UI/Button/Button";

import { Product } from "../../../../../../models/Meal/Exclusions";

import * as S from "./ExclusionsModal.style";

type ExclusionsModalProps = {
    exclusions?: Product[];
    close: () => void;
};

const ExclusionsModal = ({ exclusions, close }: ExclusionsModalProps) => {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();
    const [isLoading, setIsLoading] = useState(false);
    const [currentExclusions, setCurrentExclusions] = useState<Product[]>([]);

    useEffect(() => {
        if (exclusions) {
            setCurrentExclusions(exclusions);
        }
    }, [exclusions]);

    const onChangeExclusions = (exclusions: Product[]) => {
        const currentExclusionsCopy = JSON.parse(JSON.stringify(exclusions));
        setCurrentExclusions(currentExclusionsCopy);
    };

    const removeExclusion = (index: number) => {
        const currentExclusionsCopy = JSON.parse(JSON.stringify(currentExclusions));
        currentExclusionsCopy.splice(index, 1);
        setCurrentExclusions(currentExclusionsCopy);
    };

    const saveExclusions = async () => {
        setIsLoading(true);

        const currentExclusionsCopy = JSON.parse(JSON.stringify(currentExclusions)).map(
            (exclusion: Product) => exclusion.id,
        );
        await axiosFoodieInstance
            .post(ENDPOINTS_MEALS.excludedProducts, currentExclusionsCopy)
            .then((response) => {
                if (response.status === 201) {
                    dispatch(
                        setNotification({
                            label: "Exclusions",
                            header: "Succes",
                            message: "Excluded was saved",
                            timeout: 5000,
                        }),
                    );
                    close();
                    queryClient.invalidateQueries(["userBasicProfile"], {
                        refetchType: "all",
                    });
                }
            })
            .catch((err: AxiosError) => {
                const errorMessage = err.message
                    ? err.message
                    : "Cannot send exclusions. Try again later.";

                dispatch(
                    setNotification({
                        label: "Exclusions",
                        header: "Failed",
                        message: errorMessage,
                        timeout: 5000,
                    }),
                );
            });
        setIsLoading(false);
    };

    return (
        <ModalPortal close={close}>
            <BoxPad header='List of excluded products' padding='24px'>
                <S.Container>
                    <Label fontSize='12px'>
                        The selected exclusions will be included in each generated diet. If you want
                        to modify this list for a specific diet, you will be able to do so during
                        the diet generation process.
                    </Label>

                    {!currentExclusions?.length ? (
                        <S.EmptyContainer>
                            <Label fontSize='12px' color={mainTheme.colors.mainBlack}>
                                No exclusions in the diet
                            </Label>
                        </S.EmptyContainer>
                    ) : (
                        <S.ExclusionsWrapper>
                            <Label
                                fontSize='12px'
                                fontWeight='500'
                                color={mainTheme.colors.mainBlack}
                            >
                                Current exclusions
                            </Label>
                            <ScrollBox height={150} scrollDistance={20}>
                                <S.Exclusions>
                                    {currentExclusions.map((exclusion, index) => (
                                        <S.ExclusionItem
                                            key={exclusion.name}
                                            onClick={() => removeExclusion(index)}
                                        >
                                            <Label
                                                fontSize='11px'
                                                fontWeight='500'
                                                textAlign='center'
                                                color={mainTheme.colors.mainBlack}
                                            >
                                                {exclusion.name}
                                            </Label>
                                        </S.ExclusionItem>
                                    ))}
                                </S.Exclusions>
                            </ScrollBox>
                        </S.ExclusionsWrapper>
                    )}
                    <SearchProducts
                        selectedProducts={currentExclusions}
                        returnType='products'
                        onChange={(products) => onChangeExclusions(products)}
                    />
                    <S.ActionContainer>
                        <Button
                            styleType='primaryFull'
                            onClick={saveExclusions}
                            size='small'
                            width='100px'
                            isLoading={isLoading}
                        >
                            Save
                        </Button>
                    </S.ActionContainer>
                </S.Container>
            </BoxPad>
        </ModalPortal>
    );
};

export default ExclusionsModal;
