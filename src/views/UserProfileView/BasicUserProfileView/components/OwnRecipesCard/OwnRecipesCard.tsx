import { useNavigate } from "react-router-dom";

import { NAVIGATION } from "../../../../../navigation/paths";
import { mainTheme } from "../../../../../themes/mainTheme";

import RedirectButton from "../../../../../components/UI/RedirectButton/RedirectButton";
import BoxPad, { ClassNameProp } from "../../../../../components/UI/BoxPad/BoxPad";
import Button from "../../../../../components/UI/Button/Button";
import Label from "../../../../../components/UI/Label/Label";
import OwnRecipe from "./components/OwnRecipe/OwnRecipe";

import { Recipe } from "../../../../../models/Meal/Recipe";

import * as S from "./OwnRecipesCard.style";

type OwnRecipesCardProps = ClassNameProp & {
    userRecipes?: Recipe[];
};

const fitUserRecipes = (userRecipes: Recipe[]) => {
    return userRecipes
        .sort((a, b) => {
            if (b.timestamp && a.timestamp) {
                return b.timestamp - a.timestamp;
            }
            return -1;
        })
        .slice(0, 3);
};

const OwnRecipesCard = ({ className, userRecipes }: OwnRecipesCardProps) => {
    const navigate = useNavigate();

    return (
        <BoxPad header='Own meals' padding='24px 24px 13px 24px' className={className}>
            <S.Container>
                {userRecipes && userRecipes.length ? (
                    <>
                        <S.Meals>
                            {fitUserRecipes(userRecipes).map((userRecipe) => (
                                <OwnRecipe userRecipe={userRecipe} key={userRecipe.id} />
                            ))}
                        </S.Meals>
                        <RedirectButton
                            label='See all'
                            onClick={() => navigate(NAVIGATION.recipes)}
                        />
                    </>
                ) : (
                    <S.EmptyContainer>
                        <Label fontSize='12px' color={mainTheme.colors.grey}>
                            No own meals, add a meal now
                        </Label>
                        <Button
                            width='100px'
                            size='small'
                            onClick={() => navigate(NAVIGATION.recipes)}
                        >
                            Add meal
                        </Button>
                    </S.EmptyContainer>
                )}
            </S.Container>
        </BoxPad>
    );
};

export default OwnRecipesCard;
