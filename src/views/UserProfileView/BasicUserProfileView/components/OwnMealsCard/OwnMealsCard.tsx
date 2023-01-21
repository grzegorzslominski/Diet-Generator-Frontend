import { useNavigate } from "react-router-dom";

import { NAVIGATION } from "../../../../../navigation/paths";
import { mainTheme } from "../../../../../themes/mainTheme";

import RedirectButton from "../../../../../components/UI/RedirectButton/RedirectButton";
import BoxPad, { ClassNameProp } from "../../../../../components/UI/BoxPad/BoxPad";
import Button from "../../../../../components/UI/Button/Button";
import Label from "../../../../../components/UI/Label/Label";
import OwnMeal from "./components/OwnMeal/OwnMeal";

import { UserRecipe } from "../../../../../models/Profile/BasicProfile";

import * as S from "./OwnMealsCard.style";

type OwnMealsCardProps = ClassNameProp & {
    userRecipes?: UserRecipe[];
};

const fitUserRecipes = (userRecipes: UserRecipe[]) => {
    return userRecipes.sort((a, b) => b.timestamp - a.timestamp).slice(0, 3);
};

const OwnMealsCard = ({ className, userRecipes }: OwnMealsCardProps) => {
    const navigate = useNavigate();

    return (
        <BoxPad header='Own meals' padding='24px 24px 13px 24px' className={className}>
            <S.Container>
                {userRecipes && userRecipes.length ? (
                    <>
                        <S.Meals>
                            {fitUserRecipes(userRecipes).map((userRecipe) => (
                                <OwnMeal userRecipe={userRecipe} key={userRecipe.id} />
                            ))}
                        </S.Meals>
                        <RedirectButton
                            label='See all'
                            onClick={() => navigate(NAVIGATION.ownMeals)}
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
                            onClick={() => navigate(NAVIGATION.newMeal)}
                        >
                            Add meal
                        </Button>
                    </S.EmptyContainer>
                )}
            </S.Container>
        </BoxPad>
    );
};

export default OwnMealsCard;
