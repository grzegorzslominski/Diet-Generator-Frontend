import { useState } from "react";
import { useDispatch } from "react-redux";

import { mainTheme } from "../../../../../../../../../themes/mainTheme";
import { postRecipesSurvey } from "../../../../../../../../../models/Survey/Survey";
import { setNotification } from "../../../../../../../../../redux/slices/notification";

import BoxPad from "../../../../../../../../../components/UI/BoxPad/BoxPad";
import Label from "../../../../../../../../../components/UI/Label/Label";
import ModalPortal from "../../../../../../../../../components/UI/ModalPortal/ModalPortal";
import RatingInput from "../../../../../../../../UserProfileView/BasicUserProfileView/components/SurveyCard/SurveyForms/RatingInput/RatingInput";
import Button from "../../../../../../../../../components/UI/Button/Button";

import * as S from "./RecipeRatingModal.style";

type RecipeRatingModalProps = {
    recipeID: number;
    recipeTitle: string;
    close: () => void;
};

export const RecipeRatingModal = ({ recipeID, recipeTitle, close }: RecipeRatingModalProps) => {
    const dispatch = useDispatch();
    const [rate, setRate] = useState<number>();
    const [isLoading, setIsLoading] = useState(false);

    const submitRate = async () => {
        if (rate) {
            setIsLoading(true);
            const sendRecipeForm = await postRecipesSurvey({
                ratingList: [{ id: recipeID, score: rate }],
            });
            if (sendRecipeForm) {
                dispatch(
                    setNotification({
                        label: "Recipe rating",
                        header: "Success",
                        message: "Recipe has been evaluated",
                        timeout: 5000,
                    }),
                );
            }
            setIsLoading(false);
            close();
        }
    };

    return (
        <ModalPortal close={close} blurBackground blurLevel='normal'>
            <BoxPad>
                <S.Container>
                    <Label fontSize='13px' color={mainTheme.colors.mainBlack} width='100%'>
                        Rate the proposed recipe on a scale of 1 to 10. <br /> Your answers will
                        help us better match the meals proposed in your diet.
                    </Label>
                    <S.RatinigBox>
                        <Label
                            fontSize='16px'
                            fontWeight='500'
                            color={mainTheme.colors.mainBlack}
                            width='100%'
                        >
                            {recipeTitle}
                        </Label>
                        <RatingInput onChange={(value: number) => setRate(value)} value={rate} />
                    </S.RatinigBox>

                    <Button
                        width='115px'
                        size='small'
                        styleType='primaryFull'
                        onClick={submitRate}
                        isLoading={isLoading}
                        disabled={!rate}
                    >
                        Submit
                    </Button>
                </S.Container>
            </BoxPad>
        </ModalPortal>
    );
};

export default RecipeRatingModal;
