import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { mainTheme } from "../../../../../themes/mainTheme";

import BoxPad, { ClassNameProp } from "../../../../../components/UI/BoxPad/BoxPad";
import ExclusionsModal from "./ExclusionsModal/ExclusionsModal";
import Button from "../../../../../components/UI/Button/Button";
import Label from "../../../../../components/UI/Label/Label";

import { ExcludedProducts, getProducts } from "../../../../../models/Profile/BasicProfile";

import * as S from "./ExclusionsCard.style";

type ExclusionsCardProps = ClassNameProp & {
    excludedProducts?: ExcludedProducts;
};

const ExclusionsCard = ({ className, excludedProducts }: ExclusionsCardProps) => {
    const navigate = useNavigate();
    const { data: products, isLoading } = useQuery(["productsList"], getProducts);
    const [openExclusionsModal, setOpenExclusionsModal] = useState(false);

    return (
        <BoxPad header='Excluded products' padding='24px 24px 21px 24px' className={className}>
            <S.Container>
                <S.Content>
                    <S.ExclusionDetail>
                        <Label
                            color={mainTheme.colors.inputText}
                            fontSize='13px'
                            fontWeight='600'
                            width='240px'
                        >
                            Last excluded product:
                        </Label>
                        <Label
                            color={mainTheme.colors.secondaryColor}
                            fontSize='15px'
                            fontWeight='600'
                        >
                            rice noodles
                        </Label>
                    </S.ExclusionDetail>

                    <S.ExclusionDetail>
                        <Label
                            color={mainTheme.colors.inputText}
                            fontSize='13px'
                            fontWeight='600'
                            width='240px'
                        >
                            Number of excluded products:
                        </Label>
                        <Label
                            color={mainTheme.colors.secondaryColor}
                            fontSize='15px'
                            fontWeight='600'
                        >
                            14
                        </Label>
                    </S.ExclusionDetail>
                </S.Content>

                <Button
                    styleType='primaryFull'
                    size='extraSmall'
                    onClick={() => setOpenExclusionsModal(true)}
                    width='140px'
                    borderRadius='10px'
                    fontSize='12px'
                >
                    Manage exclusions
                </Button>

                {openExclusionsModal && (
                    <ExclusionsModal
                        exclusions={excludedProducts?.listOfExcludedProducts}
                        products={products}
                        productsIsLoading={isLoading}
                        close={() => setOpenExclusionsModal(false)}
                    />
                )}
            </S.Container>
        </BoxPad>
    );
};

export default ExclusionsCard;
