import { USER } from "./const/userData";

import ViewBox from "../../../components/UI/ViewBox/ViewBox";
import UserDetailsCard from "./components/UserDetailsCard/UserDetailsCard";
import UserStatisticsCard from "./components/UserStatisticsCard/UserStatisticsCard";

import * as S from "./BasicUserProfileView.style";
import NavbarVertical from "../../../components/NavbarVertical/NavbarVertical";

const BasicUserProfileView = () => {
    return (
        <ViewBox>
            <NavbarVertical />
            <S.Container>
                <UserDetailsCard user={USER} />
                <UserStatisticsCard />
            </S.Container>
        </ViewBox>
    );
};

export default BasicUserProfileView;
