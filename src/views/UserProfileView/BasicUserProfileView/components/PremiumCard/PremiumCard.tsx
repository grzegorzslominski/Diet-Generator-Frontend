import { useNavigate } from "react-router-dom";
import moment from "moment";

import { mainTheme } from "../../../../../themes/mainTheme";
import { NAVIGATION } from "../../../../../navigation/paths";

import BoxPad, { ClassNameProp } from "../../../../../components/UI/BoxPad/BoxPad";
import Label from "../../../../../components/UI/Label/Label";
import Button from "../../../../../components/UI/Button/Button";

import * as S from "./PremiumCard.style";
import { Subscription } from "../../../../../models/Subscription/Subscription";

type PremiumCardProps = ClassNameProp & {
    userSubscriptions: Subscription | null;
};

const calculatePremiumRemainingTime = (startTime?: number, endTime?: number) => {
    if (!startTime || !endTime) {
        return;
    }
    return moment(endTime).diff(moment(startTime), "days");
};

const PremiumCard = ({ className, userSubscriptions }: PremiumCardProps) => {
    const navigate = useNavigate();
    console.log(userSubscriptions);

    return (
        <BoxPad
            header='Premium account'
            gradientHeader
            padding='22px 24px 21px 24px'
            className={className}
        >
            <S.Container>
                <Label
                    color={mainTheme.colors.inputText}
                    fontSize='13px'
                    fontWeight='600'
                    lineHeight='14px'
                >
                    {userSubscriptions?.status !== "ACTIVE"
                        ? "You do not have an active subscription. Become a member of the community today and start using all the functionalities."
                        : `Your account has premium status, you have access to all functionalities of theapplication.`}
                </Label>
                {userSubscriptions?.status !== "ACTIVE" && (
                    <S.RemainingStatusContainer>
                        <Label
                            color={mainTheme.colors.inputText}
                            fontSize='14px'
                            fontWeight='600'
                            lineHeight='29px'
                        >
                            Premium Account Status Remaining :
                        </Label>
                        <Label
                            color={mainTheme.colors.secondaryColor}
                            fontSize='14px'
                            fontWeight='600'
                            lineHeight='18px'
                        >
                            {`${calculatePremiumRemainingTime(
                                userSubscriptions?.start_time,
                                userSubscriptions?.valid_till,
                            )} day`}
                        </Label>
                    </S.RemainingStatusContainer>
                )}

                <S.ActionContainer>
                    <Button
                        styleType='gradientFull'
                        size='extraSmall'
                        onClick={() => navigate(NAVIGATION.premium)}
                        width='140px'
                        borderRadius='10px'
                        fontSize='12px'
                    >
                        {userSubscriptions?.status !== "ACTIVE"
                            ? "Activate subscription"
                            : "Subscription details"}
                    </Button>
                </S.ActionContainer>
            </S.Container>
        </BoxPad>
    );
};

export default PremiumCard;
