import { useNavigate } from "react-router-dom";

import { NAVIGATION } from "../../../../../../../../navigation/paths";
import { mainTheme } from "../../../../../../../../themes/mainTheme";
import noPhoto from "../../../../../../../../assets/no-photo.jpg";

import RecipeProperyTable from "../../../../../../../../components/RecipeProperyTable/RecipeProperyTable";
import ModalPortal from "../../../../../../../../components/UI/ModalPortal/ModalPortal";
import Button from "../../../../../../../../components/UI/Button/Button";
import BoxPad from "../../../../../../../../components/UI/BoxPad/BoxPad";
import Label from "../../../../../../../../components/UI/Label/Label";

import { Ingredient, Recipe, RECIPE_HEADERS } from "../../../../../../../../models/Meal/Recipe";

import * as S from "./RecipeInfoModal.style";
import { prepareRecipeInstrucion } from "../../../../../../../../helpers/textParse";

type MealInfoModalProps = {
    userRecipe: Recipe;
    editMode?: boolean;
    close: () => void;
};

const MealInfoModal = ({ userRecipe, editMode = false, close }: MealInfoModalProps) => {
    const navigate = useNavigate();

    return (
        <ModalPortal close={close} blurBackground blurLevel='normal'>
            <BoxPad>
                <S.Container>
                    <Label
                        fontSize='20px'
                        fontWeight='500'
                        textAlign='center'
                        color={mainTheme.colors.inputText}
                    >
                        {userRecipe.title}
                    </Label>
                    <S.TopSection>
                        <S.MealPhoto
                            mealPhoto={userRecipe.imagePath ? userRecipe.imagePath : noPhoto}
                        />
                        <S.TopSectionInfo>
                            <RecipeProperyTable {...userRecipe} />
                            <Label
                                fontSize='15px'
                                lineHeight='16px'
                                color={mainTheme.colors.mainBlack}
                            >
                                Preparation time: {userRecipe.readyInMinutes}min
                            </Label>
                        </S.TopSectionInfo>
                    </S.TopSection>
                    <S.Divider />
                    <S.Instrucions>
                        <Label fontSize='16px' color={mainTheme.colors.inputText}>
                            Method of preparation
                        </Label>
                        <Label fontSize='14px'>
                            {prepareRecipeInstrucion(userRecipe.instructions)}
                        </Label>
                    </S.Instrucions>

                    {userRecipe?.recipesIngredients && (
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
                                    {userRecipe.recipesIngredients.map(
                                        (ingredient: Ingredient, index: number) => {
                                            return (
                                                <S.TableRow key={ingredient.id}>
                                                    {Object.keys(ingredient).map(
                                                        (ingredientKey) => {
                                                            if (
                                                                ingredientKey !== "id" &&
                                                                index < 10
                                                            ) {
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
                                                                            {
                                                                                ingredient[
                                                                                    ingredientKey
                                                                                ]
                                                                            }
                                                                        </Label>
                                                                    </S.TableRowItem>
                                                                );
                                                            }
                                                        },
                                                    )}
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
                                onClick={() => navigate(`${NAVIGATION.recipes}/${userRecipe.id}`)}
                            >
                                Edit meal
                            </Button>
                        </S.ActionContainer>
                    )}
                </S.Container>
            </BoxPad>
        </ModalPortal>
    );
};

export default MealInfoModal;
