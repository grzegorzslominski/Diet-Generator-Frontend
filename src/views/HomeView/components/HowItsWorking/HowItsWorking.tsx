import Label from "../../../../components/UI/Label/Label";
import SectionContainer from "../helpers/SectionContainer/SectionContainer";

import { mainTheme } from "../../../../themes/mainTheme";
import { WORKING_DATA } from "./const/howItsWorkingData";

import * as S from "./HowItsWorking.style";

const HowItsWorking = () => {
    return (
        <SectionContainer title={`How it's working`}>
            <S.Content>
                <Label color='#4F4F4F' fontSize='1rem' fontFamily='Lato'>
                    In order to create a menu tailored to the user, several things have to be done.
                    A survey with user preferences plays an important role, followed by further
                    processes of generating the diet. The degree of matching the proposed meals
                    increases with the time the application is used by the user.
                </Label>
                <S.WorkingPointsContainer>
                    {WORKING_DATA.map((workingPoint) => (
                        <S.WorkingPointContainer key={workingPoint.title}>
                            <S.WorkingPoint>
                                {workingPoint.icon}
                                <Label
                                    color={mainTheme.colors.mainBlack}
                                    fontFamily="'Allan', sans-serif"
                                    fontWeight='700'
                                    fontSize='1.25rem'
                                >
                                    {workingPoint.title}
                                </Label>
                                <S.PointsContainer>
                                    {workingPoint.descriptionPoints.map((point) => (
                                        <li key={point}>
                                            <Label fontSize='0.8rem' fontFamily='Lato'>
                                                {point}
                                            </Label>
                                        </li>
                                    ))}
                                </S.PointsContainer>
                            </S.WorkingPoint>
                            <S.LineContainer> {workingPoint.line}</S.LineContainer>
                        </S.WorkingPointContainer>
                    ))}
                </S.WorkingPointsContainer>
            </S.Content>
        </SectionContainer>
    );
};

export default HowItsWorking;
