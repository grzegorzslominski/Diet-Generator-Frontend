import CommentItem from "./CommentItem/CommentItem";

import { CommentI } from "../../../const/Posts";

import * as S from "./CommentsList.style";

type CommentsListProps = {
    comments: CommentI[] | null;
};

const CommentsList = ({ comments }: CommentsListProps) => {
    return (
        <S.Container>
            {comments ? (
                <>
                    {comments.map((comment: CommentI) => {
                        return <CommentItem key={comment.id} {...comment} />;
                    })}
                </>
            ) : null}
        </S.Container>
    );
};

export default CommentsList;
