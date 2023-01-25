import { mainTheme } from "../../themes/mainTheme";
import { useQuery } from "@tanstack/react-query";

import { getDashboardData } from "../../models/Dashboard/Dashboard";

import ProfileArticle from "../UserProfileView/ExpandedUserProfileView/components/ProfileArticle/ProfileArticle";
import ViewBox from "../../components/UI/ViewBox/ViewBox";
import NewCreator from "./components/NewCreator/NewCreator";
import MealsList from "./components/Meals/MealsList";
import Label from "../../components/UI/Label/Label";
import NewsBox from "./components/NewsBox/NewsBox";
import Spinner from "../../components/UI/Spinner/Spinner";

import { Post } from "../../models/Forum/Post";

import * as S from "./DashboardView.style";

const DashboardView = () => {
    const { data: dashboardData, isLoading } = useQuery(["dashboardData"], getDashboardData);

    return (
        <ViewBox>
            {isLoading || !dashboardData ? (
                <Spinner color='secondary' size='big' />
            ) : (
                <S.Content>
                    <S.TopSection>
                        <NewsBox />
                        <NewCreator creators={dashboardData.creators} />
                    </S.TopSection>
                    <MealsList
                        recipes={dashboardData.recipesSortedByLikes}
                        title='Top rated meals'
                    />
                    <S.ArticleSection>
                        <>
                            <Label
                                fontSize='24px'
                                fontWeight='600'
                                fontFamily='Lato'
                                color={mainTheme.colors.mainBlack}
                            >
                                Newly added article
                            </Label>
                            {dashboardData.newPosts.map((post: Post) => {
                                return <ProfileArticle post={post} key={post.id} />;
                            })}
                        </>
                    </S.ArticleSection>
                    <MealsList
                        recipes={dashboardData.creatorRecipes}
                        title='New meals from influencers'
                        version='author'
                    />
                </S.Content>
            )}
        </ViewBox>
    );
};

export default DashboardView;
