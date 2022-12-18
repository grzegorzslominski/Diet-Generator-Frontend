import { USER } from "./const/userData";

import ViewBox from "../../../components/UI/ViewBox/ViewBox";
import UserDetailsCard from "./components/UserDetailsCard/UserDetailsCard";
import UserStatisticsCard from "./components/UserStatisticsCard/UserStatisticsCard";
import OwnMealsCard from "./components/OwnMealsCard/OwnMealsCard";
import ProgressCard from "./components/ProgressCard/ProgressCard";
import CurrentDietCard from "./components/CurrentDietCard/CurrentDietCard";
import ExclusionsCard from "./components/ExclusionsCard/ExclusionsCard";
import PremiumCard from "./components/PremiumCard/PremiumCard";
import SurveyCard from "./components/SurveyCard/SurveyCard";
import CreatorCard from "./components/CreatorCard/CreatorCard";

import * as S from "./BasicUserProfileView.style";

const BasicUserProfileView = () => {
    return (
        <ViewBox>
            <S.Container>
                <S.ProfileDetailsContainer>
                    <UserDetailsCard user={USER} className='details' />
                    <UserStatisticsCard className='statistics' />
                    <OwnMealsCard className='ownMeals' />
                    <CurrentDietCard className='currentDiet' />
                    <ProgressCard className='progress' />
                    <SurveyCard className='survey' />
                    <ExclusionsCard className='exclusion' />
                    <PremiumCard className='premium' />
                </S.ProfileDetailsContainer>
                <CreatorCard />
            </S.Container>
        </ViewBox>
    );
};

export default BasicUserProfileView;
