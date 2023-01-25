import { mainTheme } from "../../../../themes/mainTheme";
import { ReactComponent as CheckIcon } from "../../../../assets/icons/checkMark.svg";
import { ReactComponent as XIcon } from "../../../../assets/icons/XIcon.svg";

import Button from "../../../../components/UI/Button/Button";
import Input from "../../../../components/UI/Input/Input";
import Label from "../../../../components/UI/Label/Label";
import TextArea from "../../../../components/UI/TextArea/TextArea";
import UploadBox from "../../../../components/UI/UploadBox/UploadBox";
import Select from "../../../../components/UI/Select/Select";
import SelectOption from "../../../../components/UI/Select/SelectOption";
import SearchProducts from "../../../../components/SearchProducts/SearchProducts";
import ScrollBox from "../../../../components/UI/ScrollBox/ScrollBox";

import {
    RecipeForm,
    RecipeValidation,
    RECIPE_INPUT_PRESET,
} from "../../../../models/Meal/RecipeForm";
import { Ingredient, RECIPE_TYPE_PRESET, Unit, UNITS } from "../../../../models/Meal/Recipe";
import { Product } from "../../../../models/Meal/Exclusions";

import * as S from "./RecipeFormContent.style";
import { forwardRef } from "react";

type RecipeFormContent = {
    recipe: RecipeForm;
    recipeValidation: RecipeValidation;
    isLoading: boolean;
    onChange: (property: string, value: any, index?: number) => void;
    onImageChange: (file: any) => void;
    onSubmit: () => void;
    onClose: () => void;
};

const RecipeFormContent = forwardRef<HTMLDivElement, RecipeFormContent>(
    ({ recipe, recipeValidation, isLoading, onChange, onImageChange, onSubmit, onClose }, ref) => {
        return (
            <S.Container ref={ref}>
                <S.TopSection>
                    <S.RecipeImageWrapper>
                        <UploadBox
                            url={recipe.imagePath?.url}
                            type={recipe.imagePath?.type}
                            disable={false}
                            onChange={onImageChange}
                            onRemove={() => onChange("imagePath", null)}
                            accept={{
                                "image/jpeg": [".jpeg", ".png"],
                                "image/png": [".jpeg", ".png"],
                            }}
                        />
                    </S.RecipeImageWrapper>
                    <S.TopInputWrapper>
                        <Input
                            onChange={(e) => onChange("title", e.target.value)}
                            label='Meal name'
                            value={recipe.title}
                            error={recipeValidation.title}
                            showErrorMessage={false}
                        />
                        <S.InputsContainer>
                            {Object.keys(RECIPE_INPUT_PRESET).map((key) => (
                                <Input
                                    key={key}
                                    onChange={(e) => onChange(key, +e.target.value)}
                                    label={RECIPE_INPUT_PRESET[key]}
                                    type='number'
                                    value={recipe[key]}
                                    error={recipeValidation[key] as string}
                                    showErrorMessage={false}
                                />
                            ))}
                        </S.InputsContainer>
                    </S.TopInputWrapper>
                    <S.RecipeTypesTable>
                        {Object.keys(RECIPE_TYPE_PRESET).map((key: string) => (
                            <S.RecipeTypeItem
                                key={key}
                                onClick={() => onChange(key, !recipe[key])}
                                checked={Boolean(recipe[key])}
                            >
                                <Label
                                    fontSize='12px'
                                    fontWeight='600'
                                    color={mainTheme.colors.mainBlack}
                                >
                                    {RECIPE_TYPE_PRESET[key]}
                                </Label>
                                {recipe[key] ? <CheckIcon /> : <XIcon />}
                            </S.RecipeTypeItem>
                        ))}
                    </S.RecipeTypesTable>
                </S.TopSection>
                <TextArea
                    onChange={(e) => onChange("instructions", e.target.value)}
                    label='Instruction of preparing'
                    value={recipe.instructions}
                    width='100%'
                    height='80px'
                    limit={500}
                    error={recipeValidation.instructions}
                />
                <S.MidSection>
                    <SearchProducts
                        selectedProducts={recipe.ingredients as Product[]}
                        onChange={(value: Ingredient[] | Product[]) =>
                            onChange("ingredients", value)
                        }
                        returnType='ingredients'
                    />
                    <S.IngredientsContanier>
                        <Label
                            fontSize='14px'
                            fontWeight='500'
                            color={mainTheme.colors.mainBlack}
                            fontFamily='Lato'
                        >
                            Added ingredients
                        </Label>
                        <S.IngredientsList emptyList={Boolean(!recipe.ingredients.length)}>
                            {recipe.ingredients.length ? (
                                <ScrollBox height={260} scrollDistance={20}>
                                    <S.IngredientsItemsWrapper>
                                        {recipe.ingredients.map((ingredient, index) => (
                                            <S.IngredientItem key={ingredient.name}>
                                                <Label
                                                    fontSize='14px'
                                                    color={mainTheme.colors.mainBlack}
                                                    fontWeight='500'
                                                >
                                                    {ingredient.name}
                                                </Label>
                                                <Input
                                                    onChange={(e) =>
                                                        onChange("amount", +e.target.value, index)
                                                    }
                                                    label={"Amount"}
                                                    type='number'
                                                    value={ingredient.amount}
                                                    size='small'
                                                    width='80px'
                                                />
                                                <Select
                                                    borderRadius='0'
                                                    onChange={(value: Unit) =>
                                                        onChange("unit", value, index)
                                                    }
                                                    width='60px'
                                                    value={ingredient.unit}
                                                    label='Unit'
                                                    size='small'
                                                >
                                                    {UNITS.map((unit: string) => (
                                                        <SelectOption
                                                            key={unit}
                                                            onChange={(value: Unit) =>
                                                                onChange("unit", value, index)
                                                            }
                                                            value={unit}
                                                        >
                                                            {unit}
                                                        </SelectOption>
                                                    ))}
                                                </Select>
                                            </S.IngredientItem>
                                        ))}
                                    </S.IngredientsItemsWrapper>
                                </ScrollBox>
                            ) : (
                                <S.EmptyContainer>
                                    <Label fontSize='12px'>No ingredient added</Label>
                                </S.EmptyContainer>
                            )}
                        </S.IngredientsList>
                    </S.IngredientsContanier>
                    {recipeValidation.isIngredient && (
                        <Label
                            fontSize='12px'
                            fontWeight='500'
                            fontFamily='Lato'
                            color={mainTheme.colors.error}
                        >
                            {recipeValidation.isIngredient}
                        </Label>
                    )}
                </S.MidSection>

                <S.ActionContainer>
                    <Button
                        width='150px'
                        styleType='primaryEmpty'
                        onClick={onClose}
                        fontSize='14px'
                        size='small'
                        disabled={isLoading}
                    >
                        Close
                    </Button>
                    <Button
                        isLoading={isLoading}
                        width='150px'
                        styleType='gradientFull'
                        onClick={onSubmit}
                        fontSize='14px'
                        size='small'
                    >
                        Save recipe
                    </Button>
                </S.ActionContainer>
            </S.Container>
        );
    },
);

export default RecipeFormContent;
