import { useNavigate } from "react-router-dom";

import { ReactComponent as CheckIcon } from "../../../../../../../../assets/icons/checkMark.svg";
import { ReactComponent as XIcon } from "../../../../../../../../assets/icons/XIcon.svg";
import { makeFirstLatterUppercase } from "../../../../../../../../helpers/textParse";
import { NAVIGATION } from "../../../../../../../../navigation/paths";
import { mainTheme } from "../../../../../../../../themes/mainTheme";
import noPhoto from "../../../../../../../../assets/no-photo.png";

import ModalPortal from "../../../../../../../../components/UI/ModalPortal/ModalPortal";
import Button from "../../../../../../../../components/UI/Button/Button";
import BoxPad from "../../../../../../../../components/UI/BoxPad/BoxPad";
import Label from "../../../../../../../../components/UI/Label/Label";

import {
    RecipeNutrionsType,
    RecipeType,
    RECIPE_TYPE_PRESET,
    Recipe,
    USER_RECIPE_NUTRIONS,
    USER_RECIPE_TYPE,
} from "../../../../../../../../models/Meal/Recipe";

import * as S from "./RecipeInfoModal.style";
type MealInfoModalProps = {
    userRecipe: Recipe;
    close: () => void;
};

const MealInfoModal = ({ userRecipe, close }: MealInfoModalProps) => {
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
                            <S.TableInfo>
                                <S.TableCol>
                                    <>
                                        <S.ColItem>
                                            <Label fontSize='14px'>Kcal</Label>
                                            <Label fontSize='14px' textAlign='end'>
                                                {userRecipe.calories} kcal
                                            </Label>
                                        </S.ColItem>
                                        {USER_RECIPE_NUTRIONS.map((nutrien: RecipeNutrionsType) => {
                                            return (
                                                <S.ColItem key={nutrien}>
                                                    <Label fontSize='14px'>
                                                        {makeFirstLatterUppercase(nutrien)}
                                                    </Label>
                                                    <Label fontSize='14px' textAlign='end'>
                                                        {userRecipe[nutrien]} g
                                                    </Label>
                                                </S.ColItem>
                                            );
                                        })}
                                        <S.ColItem>
                                            <Label fontSize='14px'>Servings:</Label>
                                            <Label fontSize='14px' textAlign='end'>
                                                {userRecipe.servings}
                                            </Label>
                                        </S.ColItem>
                                    </>
                                </S.TableCol>
                                <S.TableCol>
                                    <>
                                        {USER_RECIPE_TYPE.map((recipeType: RecipeType) => {
                                            return (
                                                <S.ColItem
                                                    key={recipeType}
                                                    compatibleType={userRecipe[recipeType]}
                                                >
                                                    <Label fontSize='14px'>
                                                        {RECIPE_TYPE_PRESET[recipeType]}
                                                    </Label>
                                                    {userRecipe[recipeType] ? (
                                                        <CheckIcon />
                                                    ) : (
                                                        <XIcon />
                                                    )}
                                                </S.ColItem>
                                            );
                                        })}
                                    </>
                                </S.TableCol>
                            </S.TableInfo>
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
                        <Label fontSize='14px'>{userRecipe.instructions}</Label>
                    </S.Instrucions>
                    <S.ActionContainer>
                        <Button
                            size='small'
                            width='125px'
                            onClick={() => navigate(NAVIGATION.newMeal)}
                        >
                            Edit meal
                        </Button>
                    </S.ActionContainer>
                </S.Container>
            </BoxPad>
        </ModalPortal>
    );
};

export default MealInfoModal;
