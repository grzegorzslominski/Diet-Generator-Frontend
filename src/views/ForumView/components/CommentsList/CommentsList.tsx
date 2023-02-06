import { mainTheme } from "../../../../themes/mainTheme";
import { parseUnixTime } from "../../../AuthViews/helpers/date";

import BoxPad from "../../../../components/UI/BoxPad/BoxPad";
import Label from "../../../../components/UI/Label/Label";
import AuthorBox from "../../../../components/AuthorBox/AuthorBox";

import { Comment } from "../../../../models/Forum/Forum";

import * as S from "./CommentsList.style";

type CommentsListProps = {
    comments: Comment[];
};

const CommentsList = ({ comments }: CommentsListProps) => {
    return (
        <BoxPad padding='16px 18px' width='100%'>
            <S.Container>
                <Label
                    width='100%'
                    fontSize='14px'
                    fontWeight='500'
                    color={mainTheme.colors.mainBlack}
                >
                    Comments
                </Label>
                {!comments.length ? (
                    <S.EmptyContainer>
                        <Label fontSize='13px' color={mainTheme.colors.grey}>
                            No comments added yet
                        </Label>
                    </S.EmptyContainer>
                ) : (
                    <S.Comments>
                        {comments
                            .sort((a, b) => b.timestamp - a.timestamp)
                            .map((comment) => (
                                <S.Comment key={comment.id}>
                                    <Label fontSize='15px' color={mainTheme.colors.mainBlack}>
                                        {comment.content}
                                    </Label>
                                    <S.CommentInfo>
                                        <AuthorBox
                                            size='small'
                                            author={comment.user}
                                            authorImage={comment.userImagePath}
                                        />
                                        <Label fontSize='12px' color={mainTheme.colors.mainBlack}>
                                            {parseUnixTime(comment.timestamp)}
                                        </Label>
                                    </S.CommentInfo>
                                </S.Comment>
                            ))}
                    </S.Comments>
                )}
            </S.Container>
        </BoxPad>
    );
};

export default CommentsList;
