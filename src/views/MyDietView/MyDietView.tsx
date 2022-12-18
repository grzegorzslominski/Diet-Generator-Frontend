import DisplayedDays from "./components/displayedDays/DisplayedDays";
import MealItemList from "./components/Meals/MealItemList";

import * as S from "./MyDietView.style";

const MyDietView = () => {
    return (
        <S.Container>
            <DisplayedDays />
            <MealItemList />
        </S.Container>
    );
};

export default MyDietView;
