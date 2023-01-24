import { ReactComponent as CheckIcon } from "../../assets/icons/checkMark.svg";
import { ReactComponent as XIcon } from "../../assets/icons/XIcon.svg";
import { makeFirstLatterUppercase } from "../../helpers/textParse";

import Label from "../UI/Label/Label";

import {
    Recipe,
    RecipeNutrionsType,
    RecipeType,
    RECIPE_TYPE_PRESET,
    USER_RECIPE_NUTRIONS,
    USER_RECIPE_TYPE,
} from "../../models/Meal/Recipe";

import * as S from "./RecipeProperyTable.style";
import { mainTheme } from "../../themes/mainTheme";

const RecipeProperyTable = (recipe: Recipe) => {
    return (
        <S.TableInfo>
            <S.TableCol>
                <>
                    <S.ColItem>
                        <Label fontSize='12px' color={mainTheme.colors.mainBlack}>
                            Calories
                        </Label>
                        <Label fontSize='14px' textAlign='end' color={mainTheme.colors.mainBlack}>
                            {recipe.calories} kcal
                        </Label>
                    </S.ColItem>
                    {USER_RECIPE_NUTRIONS.map((nutrien: RecipeNutrionsType) => {
                        return (
                            <S.ColItem key={nutrien}>
                                <Label fontSize='13px' color={mainTheme.colors.mainBlack}>
                                    {makeFirstLatterUppercase(nutrien)}
                                </Label>
                                <Label
                                    fontSize='14px'
                                    textAlign='end'
                                    color={mainTheme.colors.mainBlack}
                                >
                                    {recipe[nutrien]} g
                                </Label>
                            </S.ColItem>
                        );
                    })}
                    <S.ColItem>
                        <Label fontSize='12px' color={mainTheme.colors.mainBlack}>
                            Servings:
                        </Label>
                        <Label fontSize='14px' textAlign='end' color={mainTheme.colors.mainBlack}>
                            {recipe.servings}
                        </Label>
                    </S.ColItem>
                </>
            </S.TableCol>
            <S.TableCol>
                <>
                    {USER_RECIPE_TYPE.map((recipeType: RecipeType) => {
                        return (
                            <S.ColItem key={recipeType} compatibleType={recipe[recipeType]}>
                                <Label fontSize='12px' color={mainTheme.colors.mainBlack}>
                                    {RECIPE_TYPE_PRESET[recipeType]}
                                </Label>
                                {recipe[recipeType] ? <CheckIcon /> : <XIcon />}
                            </S.ColItem>
                        );
                    })}
                </>
            </S.TableCol>
        </S.TableInfo>
    );
};

export default RecipeProperyTable;
