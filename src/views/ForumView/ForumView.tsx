import { Outlet } from "react-router-dom";

import ViewBox from "../../components/UI/ViewBox/ViewBox";
import ForumNavbar from "./ForumNavbar/ForumNavbar";

import { User } from "../../models/User/User";

import * as S from "./ForumView.style";

type ForumViewProps = {
    user: User;
};

const ForumView = ({ user }: ForumViewProps) => {
    return (
        <ViewBox>
            <S.Container>
                <ForumNavbar user={user} />
                <Outlet />
            </S.Container>
        </ViewBox>
    );
};

export default ForumView;
