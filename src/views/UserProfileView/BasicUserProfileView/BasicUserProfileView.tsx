import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

import { getUserBasicProfile } from "../../../models/Profile/BasicProfile";

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

import { TStore } from "../../../redux/store/store";

import * as S from "./BasicUserProfileView.style";

const BasicUserProfileView = () => {
    const user = useSelector((state: TStore) => state?.userReducer);

    const { data: basicProfileData } = useQuery(["userBasicProfile"], getUserBasicProfile);

    return (
        <ViewBox>
            {!user || !basicProfileData ? (
                <Spinner color='secondary' size='big' />
            ) : (
                <S.Container>
                    <S.ProfileDetailsContainer>
                        <UserDetailsCard className='details' user={user} />
                        <UserStatisticsCard
                            className='statistics'
                            userStats={basicProfileData.userStats}
                        />
                        <OwnMealsCard
                            className='ownMeals'
                            userRecipes={basicProfileData.userRecipes}
                        />
                        <CurrentDietCard className='currentDiet' />
                        <ProgressCard className='progress' />
                        <SurveyCard className='survey' />
                        <ExclusionsCard
                            className='exclusion'
                            excludedProducts={basicProfileData.excludedProductsList}
                        />
                        <PremiumCard className='premium' />
                    </S.ProfileDetailsContainer>
                    <CreatorCard user={user} userExtras={basicProfileData.userExtras} />
                </S.Container>
            )}
        </ViewBox>
    );
};

export default BasicUserProfileView;
