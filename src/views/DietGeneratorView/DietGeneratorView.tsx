import { useState } from "react";
import { useDispatch } from "react-redux";

import { setNotification } from "../../redux/slices/notification";

import { BASIC_GENERATOR_DATA, GeneratorI, questionType } from "../../models/Generator/GeneratorI";
import axiosFoodieInstance from "../../axios/axiosFoodieInstance";
import { ENDPOINTS_USER } from "../../navigation/endpoints";

import GenerateYourOwnDiet from "./components/GenerateYourOwnDiet/GenerateYourOwnDiet";
import ChooseYourGoal from "./components/Choose your goal/ChooseYourGoal";
import Preferences from "./components/Preferences/Preferences";
import AnswerQuestions from "./components/AnswerQuestions/AnswerQuestions";
import Button from "../../components/UI/Button/Button";

import * as S from "./DietGeneratorView.style";

const DietGeneratorView = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setIsData] = useState<GeneratorI>(BASIC_GENERATOR_DATA);
    const dispatch = useDispatch();

    const handleChange = (property: string, value: any) => {
        const currentData = JSON.parse(JSON.stringify(data));
        if (property === "exclusions") {
            const id = currentData[property].findIndex((id: number) => id === value);
            id === -1 ? currentData[property].push(value) : currentData[property].splice(id, 1);
        } else if (property === "questions") {
            const questions = currentData[property].find(
                (question: questionType) => question.id === value.id,
            );
            if (questions) {
                questions.value = value.value;
            } else {
                currentData.questions.push(value);
            }
        } else {
            currentData[property] = value;
        }

        setIsData(currentData);
    };

    const handleForm = () => {
        if (data.goal === "") {
            return false;
        }
        if (data.questions.length < 13) {
            return false;
        }

        return true;
    };

    const onSubmit = () => {
        setIsLoading(true);
        axiosFoodieInstance
            .post(ENDPOINTS_USER.generator, data)
            .then((response) => {
                if (response.status === 201) {
                    dispatch(
                        setNotification({
                            label: "Generator",
                            header: "Success",
                            message: "Diet was created",
                            timeout: 5000,
                        }),
                    );
                }
            })
            .catch((err) => {
                const errorMessage = err.response.data?.message
                    ? err.response.data.message
                    : "Cannot create diet";


                dispatch(
                    setNotification({
                        label: "Generator",
                        header: "Failed",
                        message: errorMessage,
                        timeout: 5000,
                    }),
                );
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <S.Container>
            <GenerateYourOwnDiet />
            <ChooseYourGoal handleChange={handleChange} />
            <Preferences handleChange={handleChange} />
            <AnswerQuestions data={data} handleChange={handleChange} />
            <Button
                onClick={onSubmit}
                styleType='gradientFull'
                isLoading={isLoading}
                width='12rem'
                borderRadius='15px'
                fontSize='1rem'
                disabled={!handleForm()}
            >
                Submit your answers
            </Button>
        </S.Container>
    );
};

export default DietGeneratorView;
