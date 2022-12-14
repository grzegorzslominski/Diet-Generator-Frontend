import { USER } from "./const/userData";

import ViewBox from "../../../components/UI/ViewBox/ViewBox";
import UserDetailsCard from "./components/UserDetailsCard/UserDetailsCard";
import UserStatisticsCard from "./components/UserStatisticsCard/UserStatisticsCard";
import OwnMealsCard from "./components/OwnMealsCard/OwnMealsCard";
import ProgressCard from "./components/ProgressCard/ProgressCard";
import CurrentDietCard from "./components/CurrentDietCard/CurrentDietCard";

import * as S from "./BasicUserProfileView.style";

const BasicUserProfileView = () => {
    return (
        <ViewBox>
            {/* <S.Container>
                <UserDetailsCard user={USER} />
                <UserStatisticsCard />
                <OwnMealsCard />
                <ProgressCard />
                <CurrentDietCard />
            </S.Container> */}
        </ViewBox>
    );
};

export default BasicUserProfileView;
