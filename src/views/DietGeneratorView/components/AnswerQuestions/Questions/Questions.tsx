import { QuestionsI, QuestionsJson } from "./const/questionsJson";
import Label from "../../../../../components/UI/Label/Label";
import { GeneratorHandleChangeI, GeneratorI } from "../../../../../models/Generator/GeneratorI";
import Checkbox from "../../../../../components/UI/Checkbox/Checkbox";

import * as S from "./Questions.style";

const Questions = ({ handleChange, data }: GeneratorHandleChangeI) => {
    const onChange = (question: QuestionsI, value: number) => {
        handleChange("questions", { id: question.id, value: value });
    };
    // const handleChecked = (item: QuestionsI, idx: number, data?: GeneratorI): boolean => {
    //     const questions = data?.questions;
    //     if (!questions) {
    //         return false;
    //     }
    //     const foundQuestion = questions.find((questions) => questions.id === item.id);
    //     if (!foundQuestion) {
    //         return false;
    //     }
    //     return foundQuestion.value === idx;
    // };

    return (
        <S.Wrapper>
            <S.Container>
                {QuestionsJson.map((item: QuestionsI) => {
                    return (
                        <S.WrapperBorder key={item.question}>
                            <S.Border>
                                <Label
                                    fontFamily='Montserrat'
                                    fontWeight='600'
                                    fontSize='0.8rem'
                                    lineHeight='1.5rem'
                                    textAlign='center'
                                    color='white'
                                >
                                    {item.question}
                                </Label>
                                <S.InputRadioContainer>
                                    {Array.from(Array(10).keys()).map((value, idx) => {
                                        return (
                                            <S.InputRadioSingleItem key={value}>
                                                <Label
                                                    fontFamily='Montserrat'
                                                    fontWeight='600'
                                                    fontSize='0.8rem'
                                                    lineHeight='1.5rem'
                                                    textAlign='center'
                                                    color='white'
                                                >
                                                    {idx + 1}
                                                </Label>
                                                <Checkbox
                                                    // checked={handleChecked(item, idx, data)}
                                                    checked={true}
                                                    onChange={() => {
                                                        onChange(item, idx);
                                                    }}
                                                />
                                            </S.InputRadioSingleItem>
                                        );
                                    })}
                                </S.InputRadioContainer>
                            </S.Border>
                        </S.WrapperBorder>
                    );
                })}
            </S.Container>
        </S.Wrapper>
    );
};

export default Questions;
