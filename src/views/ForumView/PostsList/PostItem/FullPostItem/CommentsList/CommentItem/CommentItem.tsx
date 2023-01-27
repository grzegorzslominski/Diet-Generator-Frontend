import { ReactComponent as Heart } from "../../../../../../../assets/icons/heart.svg";
import { mainTheme } from "../../../../../../../themes/mainTheme";

import Label from "../../../../../../../components/UI/Label/Label";

import { CommentI } from "../../../../const/Posts";

import * as S from "./CommentItem.style";
import { CommentMeal } from "../../../../../../../models/Meal/Recipe";

const CommentItem = ({ id, content, timestamp, user }: CommentMeal) => {
    return (
        <S.Container>
            <S.Header>
                {user?.userProfilePicture ? (
                    <img src={user.userProfilePicture} alt='profile' />
                ) : null}
                <Label
                    width='100%'
                    fontSize='14px'
                    fontWeight='600'
                    color={mainTheme.colors.mainBlack}
                >
                    {user.firstName && user.lastName
                        ? `${user.firstName} ${user.lastName}`
                        : `user${user.id}`}
                </Label>
            </S.Header>
            <S.Description>
                <Label width='100%' fontSize='15px' color={mainTheme.colors.mainBlack}>
                    {content}
                </Label>
            </S.Description>
        </S.Container>
    );
};

export default CommentItem;
