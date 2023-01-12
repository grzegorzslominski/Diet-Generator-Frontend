import { useQuery } from "@tanstack/react-query";

import { getBasicUserProfile } from "../../../models/User/User";

import UserStatisticsCard from "./components/UserStatisticsCard/UserStatisticsCard";
import CurrentDietCard from "./components/CurrentDietCard/CurrentDietCard";
import UserDetailsCard from "./components/UserDetailsCard/UserDetailsCard";
import ExclusionsCard from "./components/ExclusionsCard/ExclusionsCard";
import OwnMealsCard from "./components/OwnMealsCard/OwnMealsCard";
import ProgressCard from "./components/ProgressCard/ProgressCard";
import PremiumCard from "./components/PremiumCard/PremiumCard";
import CreatorCard from "./components/CreatorCard/CreatorCard";
import Spinner from "../../../components/UI/Spinner/Spinner";
import ViewBox from "../../../components/UI/ViewBox/ViewBox";
import SurveyCard from "./components/SurveyCard/SurveyCard";

import * as S from "./BasicUserProfileView.style";

const BasicUserProfileView = () => {
    const userID = 1;

    const {
        data: basicUserProfileData,
        isLoading,
        error,
    } = useQuery(["basicUserProfile", userID], () => getBasicUserProfile(userID));

    return (
        <ViewBox>
            <S.Container>
                <S.ProfileDetailsContainer>
                    <UserDetailsCard className='details' />
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
