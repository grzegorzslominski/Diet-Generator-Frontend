import { mainTheme } from "../../themes/mainTheme";

import ProfileArticle from "../UserProfileView/ExpandedUserProfileView/components/ProfileArticle/ProfileArticle";
import NewCreator from "./components/newCreator/NewCreator";
import ViewBox from "../../components/UI/ViewBox/ViewBox";
import MealsList from "./components/Meals/MealsList";
import Label from "../../components/UI/Label/Label";
import NewsBox from "./components/NewsBox/NewsBox";

import * as S from "./DashboardView.style";
import { useQuery } from "@tanstack/react-query";
import { getDashboardFullInfo, newPostsI } from "./models/Dashboard";

const DashboardView = () => {
    const {
        data: Dashboard,
        isLoading,
        error
    } = useQuery(["getDashboardInfo"], () => getDashboardFullInfo())
    return (
        <ViewBox>
            <S.Content>
                <S.TopSection>
                    <NewsBox />
                    <NewCreator />
                </S.TopSection>
                {/* <MealsList title='Top rated meals' /> */}
                <S.ArticleSection>
                    <Label
                        fontSize='24px'
                        fontWeight='600'
                        fontFamily='Lato'
                        color={mainTheme.colors.mainBlack}
                    >
                        Newly added article
                    </Label>
                    {
                        Dashboard && Dashboard.newPosts.map((item: newPostsI) => {
                            return <ProfileArticle key={item.id} post={item} author={item.author}/>


                      })
                    }
                    {/* <ProfileArticle {...Dashboard?.newPosts} /> */}
                </S.ArticleSection>
                <MealsList title='New meals from influencers' version='author' creatorRecipes={Dashboard!.creatorRecipes} />
            </S.Content>
        </ViewBox>
    );
};

export default DashboardView;
