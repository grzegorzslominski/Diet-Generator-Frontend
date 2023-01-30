import { useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import axiosFoodieInstance from "../../../../../../axios/axiosFoodieInstance";
import { ENDPOINTS_MEALS } from "../../../../../../navigation/endpoints";
import { AxiosError } from "axios";
import { setNotification } from "../../../../../../redux/slices/notification";

import ModalPortal from "../../../../../../components/UI/ModalPortal/ModalPortal";
import ExclusionProducts from "../../../../../../components/ExclusionProducts/ExclusionProducts";

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

    const onChange = (exclusions: Product[]) => {
        setCurrentExclusions(exclusions);
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
            <S.Container>
                <ExclusionProducts
                    isLoading={isLoading}
                    currentExclusions={currentExclusions}
                    onChange={(exclusions) => onChange(exclusions)}
                    onSave={saveExclusions}
                />
            </S.Container>
        </ModalPortal>
    );
};

export default ExclusionsModal;
