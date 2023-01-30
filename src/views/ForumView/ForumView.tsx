import { Outlet, useNavigate } from "react-router-dom";

import { mainTheme } from "../../themes/mainTheme";
import { NAV_ITEMS, NavbarForum } from "./const/NavbarForum";

import Label from "../../components/UI/Label/Label";

import * as S from "./ForumView.style";
import { useSelector } from "react-redux";
import { TStore } from "../../redux/store/store";
import { AuthorityType } from "../../models/User/User";
import ViewBox from "../../components/UI/ViewBox/ViewBox";

const ForumView = () => {
    const navigate = useNavigate();

    const navigationHandler = (item: NavbarForum) => {
        if (item.routing) {
            if (item.external) {
                window.open(item.routing, "_self");
            } else navigate(item.routing);
        }
    };

    const user = useSelector((state: TStore) => state?.userReducer);
    return (
        <ViewBox>
            <S.Container>
                <S.Header>
                    {NAV_ITEMS.map((item) => {
                        if (item.authorities) {
                            let flag = false;
                            user &&
                                user?.authorities?.map((authority: AuthorityType) => {
                                    item.authorities?.includes(authority) && (flag = true);
                                });
                            if (flag)
                                return (
                                    <S.HeaderItem
                                        key={item.label}
                                        onClick={() => navigationHandler(item)}
                                    >
                                        <Label
                                            fontFamily='Lato'
                                            fontWeight='600'
                                            fontSize='18px'
                                            textAlign='center'
                                            color={mainTheme.colors.mainBlack}
                                        >
                                            {item.label}
                                        </Label>
                                    </S.HeaderItem>
                                );
                        } else {
                            return (
                                <S.HeaderItem
                                    key={item.label}
                                    onClick={() => navigationHandler(item)}
                                >
                                    <Label
                                        fontFamily='Lato'
                                        fontWeight='600'
                                        fontSize='18px'
                                        textAlign='center'
                                        color={mainTheme.colors.mainBlack}
                                    >
                                        {item.label}
                                    </Label>
                                </S.HeaderItem>
                            );
                        }
                    })}
                </S.Header>
                <S.MiddleSection>
                    <Outlet />
                </S.MiddleSection>
            </S.Container>
        </ViewBox>
    );
};

export default ForumView;
