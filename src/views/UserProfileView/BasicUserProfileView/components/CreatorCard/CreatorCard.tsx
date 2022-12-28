import { mainTheme } from "../../../../../themes/mainTheme";

import BoxPad from "../../../../../components/UI/BoxPad/BoxPad";
import Label from "../../../../../components/UI/Label/Label";
import Button from "../../../../../components/UI/Button/Button";

import * as S from "./CreatorCard.stylet";

const CreatorCard = () => {
    return (
        <BoxPad header='Creator account' width='100%'>
            <S.Content>
                <Label color={mainTheme.colors.inputText} fontSize='13px' fontWeight='600'>
                    Are you a social media creator or a person experienced in the field of fitness
                    or nutrition? If so, contact our team to extend your account with additional
                    functionalities to reach our users.
                </Label>
                <Button styleType='gradientFull' onClick={() => {}} width='150px'>
                    Become a foodie
                </Button>
            </S.Content>
        </BoxPad>
    );
};

export default CreatorCard;
