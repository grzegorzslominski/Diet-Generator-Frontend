import { mainTheme } from "../../themes/mainTheme";

import ProfileArticle from "../UserProfileView/ExpandedUserProfileView/components/ProfileArticle/ProfileArticle";
import NewCreator from "./components/newCreator/NewCreator";
import ViewBox from "../../components/UI/ViewBox/ViewBox";
import MealsList from "./components/Meals/MealsList";
import Label from "../../components/UI/Label/Label";
import NewsBox from "./components/NewsBox/NewsBox";

import * as S from "./DashboardView.style";

const DashboardView = () => {
    return (
        <ViewBox>
            <S.Content>
                <S.TopSection>
                    <NewsBox />
                    <NewCreator />
                </S.TopSection>
                <MealsList title='Top rated meals' />
                <S.ArticleSection>
                    <Label
                        fontSize='24px'
                        fontWeight='600'
                        fontFamily='Lato'
                        color={mainTheme.colors.mainBlack}
                    >
                        Newly added article
                    </Label>
                    {/* <ProfileArticle {...NEWLY_ARTICLE} /> */}
                </S.ArticleSection>
                <MealsList title='New meals from influencers' version='author' />
            </S.Content>
        </ViewBox>
    );
};

export default DashboardView;
