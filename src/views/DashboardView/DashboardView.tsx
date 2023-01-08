import { mainTheme } from "../../themes/mainTheme";

import NewCreator from "./components/newCreator/NewCreator";
import ViewBox from "../../components/UI/ViewBox/ViewBox";
import LastWeightChanges from "./components/LastWeightChanges/LastWeightChanges";
import MealsList from "./components/Meals/MealsList";
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
                <MealsList title='New meals from influencers' version='author' />
            </S.Content>
        </ViewBox>
    );
};

export default DashboardView;
