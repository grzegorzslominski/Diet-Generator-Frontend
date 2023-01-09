import { ReactComponent as Heart } from "../../../../../../../assets/icons/heart.svg";
import { mainTheme } from "../../../../../../../themes/mainTheme";

import Label from "../../../../../../../components/UI/Label/Label";

import { CommentI } from "../../../../const/Posts";

import * as S from "./CommentItem.style";

const CommentItem = ({ id, content, timestamp, user }: CommentI) => {
    return (
        <S.Container>
            <S.Header>
                {user.userProfilePicture ? (
                    <img src={user.userProfilePicture} alt='profile' />
                ) : null}
                <Label
                    fontSize='1rem'
                    textAlign='center'
                    fontWeight='600'
                    color={mainTheme.colors.mainBlack}
                >
                    Posted by :{" "}
                    {user.firstName && user.lastName
                        ? `${user.firstName} ${user.lastName}`
                        : `user${user.id}`}
                </Label>
            </S.Header>
            <S.Description>
                <Label
                    textAlign='center'
                    fontSize='1.2rem'
                    fontWeight='400'
                    color={mainTheme.colors.mainBlack}
                >
                    {content}
                </Label>
            </S.Description>
        </S.Container>
    );
};

export default CommentItem;
