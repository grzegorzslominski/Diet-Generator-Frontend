import DisplayedDays from "./components/displayedDays/DisplayedDays";
import MealItemList from "./components/Meals/MealItemList";

import * as S from "./MyDietView.style";

type MyDietViewProps = {
  loggedUserID: number;
}
const MyDietView = ({loggedUserID}: MyDietViewProps) => {
    return (
        <S.Container>
            <MealItemList loggedUserID={loggedUserID}/>
        </S.Container>
    );
};

export default MyDietView;
