import { useState } from "react";

import Label from "../../../../../components/UI/Label/Label";
import SectionContainer from "../helpers/SectionContainer/SectionContainer";

import { ADVANTAGES_POINTS } from "./const/tailsData";
import { mainTheme } from "../../../../../themes/mainTheme";

import * as S from "./Advantages.style";

const Advantages = () => {
    const [activePoint, setActivePoint] = useState<number>();

    const handleActivePoint = (index: number) => {
        if (index === activePoint) {
            setActivePoint(undefined);
        } else {
            setActivePoint(index);
        }
    };

    return (
        <SectionContainer title='Advantages'>
            <S.Container>
                <Label color={mainTheme.colors.textColor} fontSize='1rem' fontFamily='Lato'>
                    Our platform provides full support for the user in achieving his nutritional
                    goals, starting with generating a diet and ending with maintaining his
                    motivation. Thanks to the application of a modern model of artificial
                    intelligence, each user is considered individually and our most important goal
                    is to ensure the highest level of satisfaction with the proposed meals.
                </Label>
                <S.Content>
                    <S.TailsContainer>
                        {ADVANTAGES_POINTS.map((advantagesPoint, index) => (
                            <S.PointTailContainer
                                key={`${index}-tile`}
                                zIndex={ADVANTAGES_POINTS.length - index}
                                onClick={() => handleActivePoint(index)}
                                active={activePoint === index}
                            >
                                <S.PointTailTop
                                    backgroundGradient={advantagesPoint.tileGradient.top}
                                >
                                    {advantagesPoint.tileIcon}
                                </S.PointTailTop>
                                <S.PointTailBottom
                                    backgroundGradient={advantagesPoint.tileGradient.bottom}
                                    active={activePoint === index}
                                />
                            </S.PointTailContainer>
                        ))}
                    </S.TailsContainer>
                    <S.DescriptionContanier>
                        {ADVANTAGES_POINTS.map((advantagesPoint, index) => (
                            <S.DescriptionPoint
                                key={`${index}-description`}
                                active={activePoint === index}
                                onClick={() => handleActivePoint(index)}
                            >
                                <S.PointTailContainer
                                    zIndex={ADVANTAGES_POINTS.length - index}
                                    active={true}
                                >
                                    <S.PointTailTop
                                        backgroundGradient={advantagesPoint.tileGradient.top}
                                    >
                                        {advantagesPoint.tileIcon}
                                    </S.PointTailTop>
                                </S.PointTailContainer>

                                <S.PointHeader>
                                    <S.HeaderNumber
                                        color={advantagesPoint.tileGradient.top.split(",")[0]}
                                    >
                                        <Label
                                            fontFamily="'Allan', sans-serif"
                                            fontSize='22px'
                                            fontWeight='600'
                                            color={advantagesPoint.tileGradient.top.split(",")[0]}
                                        >
                                            {index + 1}
                                        </Label>
                                    </S.HeaderNumber>
                                    <Label
                                        color={mainTheme.colors.mainBlack}
                                        fontFamily="'Allan', sans-serif"
                                        fontSize='26px'
                                        fontWeight='600'
                                    >
                                        {advantagesPoint.description.title}
                                    </Label>
                                </S.PointHeader>
                                <Label fontFamily='Lato' fontSize='16px'>
                                    {advantagesPoint.description.content}
                                </Label>
                            </S.DescriptionPoint>
                        ))}
                    </S.DescriptionContanier>
                </S.Content>
            </S.Container>
        </SectionContainer>
    );
};

export default Advantages;
