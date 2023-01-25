import { useState } from "react";

import { mainTheme } from "../../../../../themes/mainTheme";

import CreatorFormModal from "./CreatorFormModal/CreatorFormModal";
import BoxPad from "../../../../../components/UI/BoxPad/BoxPad";
import Button from "../../../../../components/UI/Button/Button";
import Label from "../../../../../components/UI/Label/Label";

import { UserData } from "../../../../../models/User/User";
import { UserExtras } from "../../../../../models/User/ExpandedUser";

import * as S from "./CreatorCard.stylet";

type CreatorCardType = {
    user: UserData;
    userExtras?: UserExtras | null;
};

const CreatorCard = ({ user, userExtras }: CreatorCardType) => {
    const [openCreatorFormModal, setOpenCreatorFormModal] = useState(false);

    return (
        <BoxPad header='Creator account' width='100%'>
            <S.Content>
                <Label color={mainTheme.colors.inputText} fontSize='13px' fontWeight='600'>
                    Are you a social media creator or a person experienced in the field of fitness
                    or nutrition? If so, contact our team to extend your account with additional
                    functionalities to reach our users.
                </Label>
                <Button
                    styleType='gradientFull'
                    onClick={() => setOpenCreatorFormModal(true)}
                    width='150px'
                >
                    Become a foodie
                </Button>
            </S.Content>
            {openCreatorFormModal && (
                <CreatorFormModal
                    userExtras={userExtras}
                    user={user}
                    onClose={() => setOpenCreatorFormModal(false)}
                />
            )}
        </BoxPad>
    );
};

export default CreatorCard;
