import { mainTheme } from "../../themes/mainTheme";

import Label from "../../components/UI/Label/Label";
import NewCreator from "./components/newCreator/NewCreator";
import LastWeightChanges from "./components/LastWeightChanges/LastWeightChanges";
import MealsList from "./components/Meals/MealsList";

import * as S from "./DashboardView.style";
const DashboardView = () => {
    return (
        <S.Container>
            <S.TopSection>
                <S.ContainerItem2>
                    <Label
                        fontSize='2rem'
                        fontFamily='Lato'
                        fontWeight='700'
                        lineHeight='2.3rem'
                        color={mainTheme.colors.mainBlack}
                    >
                        Last weight changes
                    </Label>
                    <LastWeightChanges />
                </S.ContainerItem2>
                <S.ContainerItem1>
                    <Label
                        fontSize='2rem'
                        fontFamily='Lato'
                        fontWeight='700'
                        lineHeight='2.3rem'
                        color={mainTheme.colors.mainBlack}
                    >
                        New creators on the platform
                    </Label>
                    <NewCreator />
                </S.ContainerItem1>
            </S.TopSection>
            <MealsList title='Top rated meals' />
            <MealsList title='New meals from influencers' display={true} />
        </S.Container>
    );
};

export default DashboardView;
