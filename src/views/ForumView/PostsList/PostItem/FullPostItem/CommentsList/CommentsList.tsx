import CommentItem from "./CommentItem/CommentItem";

import { CommentI } from "../../../const/Posts";

import * as S from "./CommentsList.style";
import { CommentMeal } from "../../../../../../models/Meal/Recipe";

type CommentsListProps = {
    comments?: CommentMeal[]  | null | undefined | any ;
};

const CommentsList = ({ comments }: CommentsListProps) => {
    return (
        <S.Container>
            {comments ? (
                <>
                    {comments.map((comment: CommentMeal) => {
                        return <CommentItem key={comment.id} {...comment} />;
                    })}
                </>
            ) : null}
        </S.Container>
    );
};

export default CommentsList;
