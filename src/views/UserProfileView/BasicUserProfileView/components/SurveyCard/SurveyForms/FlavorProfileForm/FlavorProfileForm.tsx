import {
    FlavourProfileSurveyAnswers,
    FLAVOUR_SERVEY_QUESTIONS,
} from "../../../../../../../models/Survey/Survey";

import { mainTheme } from "../../../../../../../themes/mainTheme";
import { useState } from "react";

import ScrollBox from "../../../../../../../components/UI/ScrollBox/ScrollBox";
import RatingInput from "../RatingInput/RatingInput";
import Label from "../../../../../../../components/UI/Label/Label";

import * as S from "./FlavorProfileForm.style";

type FlavorProfileForm = {
    onChange: (property: string, value: FlavourProfileSurveyAnswers) => void;
    flavorProfileAnswer: FlavourProfileSurveyAnswers;
};

const FlavorProfileForm = ({ flavorProfileAnswer, onChange }: FlavorProfileForm) => {
    const onChangePrehendler = (
        questionID: number,
        answers: FlavourProfileSurveyAnswers,
        value: number,
    ) => {
        const currentAnswers: FlavourProfileSurveyAnswers = JSON.parse(JSON.stringify(answers));
        const findedIndex = currentAnswers.answers.findIndex((answer) => answer.id === questionID);
        if (findedIndex > -1) {
            currentAnswers.answers[findedIndex].value = value;

            console.log(currentAnswers.answers[findedIndex]);
        } else {
            const newAnswer = JSON.parse(JSON.stringify({ id: questionID, value: value }));
            currentAnswers.answers.push(newAnswer);
        }
        onChange("flavourProfile", currentAnswers);
    };

    return (
        <S.Container>
            <Label fontSize='14px' color={mainTheme.colors.mainBlack} fontWeight='600'>
                Taste preferences survey
            </Label>
            <ScrollBox height={220} scrollDistance={20}>
                <S.QuestionsContainer>
                    {FLAVOUR_SERVEY_QUESTIONS.map((question, index) => (
                        <S.Question key={index}>
                            <Label fontSize='13px' color={mainTheme.colors.mainBlack}>
                                {question}
                            </Label>
                            <RatingInput
                                onChange={(value: number) =>
                                    onChangePrehendler(index + 1, flavorProfileAnswer, value)
                                }
                                value={
                                    flavorProfileAnswer?.answers?.find(
                                        (answer) => answer.id === index + 1,
                                    )?.value
                                }
                            />
                        </S.Question>
                    ))}
                </S.QuestionsContainer>
            </ScrollBox>
        </S.Container>
    );
};

export default FlavorProfileForm;
