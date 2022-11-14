import React from "react";
import * as S from './DashboardView.style'
import Label from "../../../components/UI/Label/Label";
import {mainTheme} from "../../../themes/mainTheme";
import NewCreator from "./newCreator/NewCreator";
import LastWeightChanges from "./LastWeightChanges/LastWeightChanges"
import NavbarVertical from "../../../components/NavbarVertical/NavbarVertical";
import MealsList from "./Meals/MealsList";
const DashboardView = () => {
    return (
        <S.Container>
          <NavbarVertical/>
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
                    <LastWeightChanges/>
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
                <NewCreator/>
                </S.ContainerItem1>
            </S.TopSection>
          <MealsList title='Top rated meals' />
          <MealsList title='New meals from influencers' display={true} />

        </S.Container>
    );
};

export default DashboardView;