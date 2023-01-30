import { useState } from "react";
import BoxPad from "../../../../../../components/UI/BoxPad/BoxPad";
import Button from "../../../../../../components/UI/Button/Button";
import Label from "../../../../../../components/UI/Label/Label";
import ModalPortal from "../../../../../../components/UI/ModalPortal/ModalPortal";
import {
    postFlavorProfileSurvey,
    postRecipesSurvey,
    Surveys,
} from "../../../../../../models/Survey/Survey";
import { mainTheme } from "../../../../../../themes/mainTheme";
import FlavorProfileForm from "../SurveyForms/FlavorProfileForm/FlavorProfileForm";
import ProductsForm from "../SurveyForms/ProductsForm/ProductsForm";

import * as S from "./SurveyModal.style";

type SurveyModalProps = {
    close: () => void;
};

const SurveyModal = ({ close }: SurveyModalProps) => {
    const [surveyAnswers, setSurveyAnswers] = useState<Surveys>({
        flavourProfile: { answers: [] },
        products: [],
    });
    const [surveysValidation, setSurveysValidation] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);

    const onChange = (property: string, value: any) => {
        const currentSurveyAnswers = JSON.parse(JSON.stringify(surveyAnswers));
        currentSurveyAnswers[property] = value;
        setSurveyAnswers(currentSurveyAnswers);
    };

    const validateSurveys = (): boolean => {
        let currentValidateSurveys = "";
        let validaitonPassed = true;

        if (
            surveyAnswers.flavourProfile.answers.length < 13 ||
            surveyAnswers.products.length < 30
        ) {
            currentValidateSurveys = "Not all fields in the form have been filled in";
            validaitonPassed = false;
        }
        setSurveysValidation(currentValidateSurveys);
        return validaitonPassed;
    };

    const sendSurvey = async () => {
        setIsLoading(true);
        const validationPassed = validateSurveys();
        if (validationPassed) {
            const sendProfileFlavourForm = await postFlavorProfileSurvey(
                surveyAnswers.flavourProfile,
            );
            const sendRecipeForm = await postRecipesSurvey({ ratingList: surveyAnswers.products });

            Promise.all([sendProfileFlavourForm, sendRecipeForm]);
            close();
        }

        setIsLoading(false);
    };

    return (
        <ModalPortal close={close}>
            <BoxPad header='Taste preferences survey'>
                <S.Contianer>
                    <Label fontSize='13px' color={mainTheme.colors.mainBlack}>
                        Sending the surveys below is designed to match our meal matching system to
                        your individual taste preferences. Please fill out the questionnaire
                        honestly in order to receive the best match.
                    </Label>
                    <FlavorProfileForm
                        onChange={onChange}
                        flavorProfileAnswer={surveyAnswers.flavourProfile}
                    />
                    <ProductsForm onChange={onChange} productAnswers={surveyAnswers.products} />
                    <S.ActionContainer>
                        <Label fontSize='12px' color={mainTheme.colors.error} width='100%'>
                            {surveysValidation}
                        </Label>
                        <Button
                            width='150px'
                            styleType='primaryFull'
                            onClick={sendSurvey}
                            isLoading={isLoading}
                        >
                            Send survey
                        </Button>
                    </S.ActionContainer>
                </S.Contianer>
            </BoxPad>
        </ModalPortal>
    );
};

export default SurveyModal;
