import GenerateYourOwnDiet from "./components/GenerateYourOwnDiet/GenerateYourOwnDiet";
import ChooseYourGoal from "./components/Choose your goal/ChooseYourGoal";
import Preferences from "./components/Preferences/Preferences";
import AnswerQuestions from "./components/AnswerQuestions/AnswerQuestions";
import Label from "../../components/UI/Label/Label";

import * as S from "./DietGeneratorView.style";

const DietGeneratorView = () => {
    return (
        <S.Container>
            <GenerateYourOwnDiet />
            <ChooseYourGoal />
            <Preferences />
            <AnswerQuestions />

            <S.ButtonContainer>
                <Label
                    fontFamily='Montserrat'
                    fontWeight='600'
                    fontSize='0.8rem'
                    lineHeight='1.5rem'
                    textAlign='center'
                    color='white'
                >
                    Submit your answers
                </Label>
            </S.ButtonContainer>
        </S.Container>
    );
};

export default DietGeneratorView;
