import * as S from "./AnswerQuestions.style";
import { mainTheme } from "../../../../themes/mainTheme";
import Label from "../../../../components/UI/Label/Label";
import Questions from "./Questions/Questions";
import { GeneratorHandleChangeI } from "../../../../models/Generator/GeneratorI";

const AnswerQuestions = ({ data, handleChange }: GeneratorHandleChangeI) => {
    return (
        <S.Container>
            <Label
                fontSize='1.5rem'
                fontFamily='Lato'
                fontWeight='700'
                lineHeight='2.3rem'
                color={mainTheme.colors.mainBlack}
            >
                Step 4: Answer questions
            </Label>
            <Questions handleChange={handleChange} data={data} />
        </S.Container>
    );
};

export default AnswerQuestions;
