import { useNavigate } from "react-router-dom";

import { NAVIGATION } from "../../../../../../../../navigation/paths";
import { mainTheme } from "../../../../../../../../themes/mainTheme";
import noPhoto from "../../../../../../../../assets/no-photo.jpg";
import { prepareRecipeInstrucion } from "../../../../../../../../helpers/textParse";

import RecipeProperyTable from "../../../../../../../../components/RecipeProperyTable/RecipeProperyTable";
import Button from "../../../../../../../../components/UI/Button/Button";
import BoxPad from "../../../../../../../../components/UI/BoxPad/BoxPad";
import Label from "../../../../../../../../components/UI/Label/Label";

import { Ingredient, Recipe, RECIPE_HEADERS } from "../../../../../../../../models/Meal/Recipe";

import * as S from "./RecipeInfo.style";

type RecipeInfoProps = {
    recipe: Recipe;
    editMode?: boolean;
};

const RecipeInfo = ({ recipe, editMode = false }: RecipeInfoProps) => {
    const navigate = useNavigate();

    return (
        <BoxPad>
            <S.Container>
                <Label
                    fontSize='20px'
                    fontWeight='500'
                    textAlign='center'
                    color={mainTheme.colors.inputText}
                >
                    {recipe.title}
                </Label>
                <S.TopSection>
                    <S.MealPhoto mealPhoto={recipe.imagePath ? recipe.imagePath : noPhoto} />
                    <S.TopSectionInfo>
                        <RecipeProperyTable {...recipe} />
                        <Label fontSize='15px' lineHeight='16px' color={mainTheme.colors.mainBlack}>
                            Preparation time: {recipe.readyInMinutes}min
                        </Label>
                    </S.TopSectionInfo>
                </S.TopSection>
                <S.Divider />
                <S.Instrucions>
                    <Label fontSize='16px' color={mainTheme.colors.inputText}>
                        Method of preparation
                    </Label>
                    <Label fontSize='14px'>{prepareRecipeInstrucion(recipe.instructions)}</Label>
                </S.Instrucions>

                {recipe?.recipesIngredients && (
                    <S.Instrucions>
                        <Label fontSize='16px' color={mainTheme.colors.inputText}>
                            Ingredients
                        </Label>
                        <S.SubHistoryTable>
                            <>
                                <S.TableRow>
                                    {RECIPE_HEADERS.map((headerItem: string) => (
                                        <S.TableRowItem key={headerItem}>
                                            <Label
                                                fontSize='12px'
                                                fontWeight='600'
                                                color={mainTheme.colors.secondaryColor}
                                            >
                                                {headerItem}
                                            </Label>
                                        </S.TableRowItem>
                                    ))}
                                </S.TableRow>
                                {recipe.recipesIngredients.map(
                                    (ingredient: Ingredient, index: number) => {
                                        return (
                                            <S.TableRow key={ingredient.id}>
                                                {Object.keys(ingredient).map((ingredientKey) => {
                                                    if (ingredientKey !== "id" && index < 10) {
                                                        return (
                                                            <S.TableRowItem
                                                                key={`${ingredient.id}-${ingredientKey}`}
                                                            >
                                                                <Label
                                                                    fontSize='13px'
                                                                    color={
                                                                        mainTheme.colors
                                                                            .secondaryColor
                                                                    }
                                                                >
                                                                    {ingredient[ingredientKey]}
                                                                </Label>
                                                            </S.TableRowItem>
                                                        );
                                                    }
                                                })}
                                            </S.TableRow>
                                        );
                                    },
                                )}
                            </>
                        </S.SubHistoryTable>
                    </S.Instrucions>
                )}
                {editMode && (
                    <S.ActionContainer>
                        <Button
                            size='small'
                            width='125px'
                            onClick={() => navigate(`${NAVIGATION.recipes}/${recipe.id}`)}
                        >
                            Edit meal
                        </Button>
                    </S.ActionContainer>
                )}
            </S.Container>
        </BoxPad>
    );
};

export default RecipeInfo;
