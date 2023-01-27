import ModalPortal from "../../../../components/UI/ModalPortal/ModalPortal";
import FullPostItem from "../PostItem/FullPostItem/FullPostItem";

import { getForumPost } from "../const/Posts";
import { useQuery } from "@tanstack/react-query";

interface SinglePostItemProps {
    id: number;
    close: () => void;
}

const SinglePostItem = ({ id, close }: SinglePostItemProps) => {
    const { data: fullPost } = useQuery([`forumPost-${id}`, id], () => getForumPost(id));

    return fullPost ? (
        <ModalPortal blurLevel='normal' blurBackground={true} close={close}>
            <FullPostItem post={fullPost} close={close} />
        </ModalPortal>
    ) : null;
};

export default SinglePostItem;
