import { Product } from "../../models/Meal/Exclusions";
import { mainTheme } from "../../themes/mainTheme";
import SearchProducts from "../SearchProducts/SearchProducts";

import BoxPad from "../UI/BoxPad/BoxPad";
import Button from "../UI/Button/Button";
import Label from "../UI/Label/Label";
import ScrollBox from "../UI/ScrollBox/ScrollBox";

import * as S from "./ExclusionProducts.style";

type ExclusionProductsProps = {
    isLoading?: boolean;
    currentExclusions: Product[];
    size?: "normal" | "big";
    type?: "const" | "variable";
    onSave?: () => void;
    onChange: (exclusions: Product[]) => void;
};

const ExclusionProducts = ({
    currentExclusions,
    isLoading,
    size = "normal",
    type = "const",
    onChange,
    onSave,
}: ExclusionProductsProps) => {
    const onChangeExclusions = (exclusions: Product[]) => {
        const currentExclusionsCopy = JSON.parse(JSON.stringify(exclusions));
        onChange(currentExclusionsCopy);
    };

    const removeExclusion = (index: number) => {
        const currentExclusionsCopy = JSON.parse(JSON.stringify(currentExclusions));
        currentExclusionsCopy.splice(index, 1);
        onChange(currentExclusionsCopy);
    };

    return (
        <BoxPad header='List of excluded products' padding='24px'>
            <S.Container>
                <Label fontSize='12px'>
                    {type === "const"
                        ? `The selected exclusions will be included in each generated diet. If you want to
                    modify this list for a specific diet, you will be able to do so during the diet
                    generation process.`
                        : "Diet exclusions will not affect your permanent exclusions managed from your user profile."}
                </Label>

                {!currentExclusions?.length ? (
                    <S.EmptyContainer>
                        <Label fontSize='12px' color={mainTheme.colors.mainBlack}>
                            No exclusions in the diet
                        </Label>
                    </S.EmptyContainer>
                ) : (
                    <S.ExclusionsWrapper>
                        <Label fontSize='12px' fontWeight='500' color={mainTheme.colors.mainBlack}>
                            Current exclusions
                        </Label>
                        <ScrollBox height={150} scrollDistance={20}>
                            <S.Exclusions size={size}>
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
                    size={size}
                    onChange={(products) => onChangeExclusions(products)}
                />
                {onSave && (
                    <S.ActionContainer>
                        <Button
                            styleType='primaryFull'
                            onClick={onSave}
                            size='small'
                            width='100px'
                            isLoading={isLoading}
                        >
                            Save
                        </Button>
                    </S.ActionContainer>
                )}
            </S.Container>
        </BoxPad>
    );
};

export default ExclusionProducts;
