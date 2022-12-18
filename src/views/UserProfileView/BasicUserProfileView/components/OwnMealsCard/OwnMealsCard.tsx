import { useNavigate } from "react-router-dom";

import { OWN_MEALS } from "../../const/userData";
import { NAVIGATION } from "../../../../../navigation/paths";

import BoxPad, { ClassNameProp } from "../../../../../components/UI/BoxPad/BoxPad";
import OwnMeal from "./components/OwnMeal/OwnMeal";
import RedirectButton from "../../../../../components/UI/RedirectButton/RedirectButton";

import * as S from "./OwnMealsCard.style";

type OwnMealsCardProps = ClassNameProp & {};

const OwnMealsCard = ({ className }: OwnMealsCardProps) => {
    const navigate = useNavigate();

    return (
        <BoxPad header='Own meals' padding='24px 24px 13px 24px' className={className}>
            <S.Container>
                <S.Meals>
                    {OWN_MEALS.slice(0, 3).map((meal) => (
                        <OwnMeal {...meal} key={meal.id} />
                    ))}
                </S.Meals>
                <RedirectButton label='See all' onClick={() => navigate(NAVIGATION.ownMeals)} />
            </S.Container>
        </BoxPad>
    );
};

export default OwnMealsCard;
