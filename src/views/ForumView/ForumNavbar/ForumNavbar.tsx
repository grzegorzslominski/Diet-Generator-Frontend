import { useNavigate } from "react-router-dom";

import { mainTheme } from "../../../themes/mainTheme";
import { AuthorityType, ForumNavbarItem, NAV_ITEMS } from "./const/NavbarForum";

import BoxPad from "../../../components/UI/BoxPad/BoxPad";
import Label from "../../../components/UI/Label/Label";

import { User } from "../../../models/User/User";

import * as S from "./ForumNavbar.style";

type ForumNavbarProps = {
    user: User;
};

const ForumNavbar = ({ user }: ForumNavbarProps) => {
    const navigate = useNavigate();

    return (
        <S.Container>
            {NAV_ITEMS.map((item: ForumNavbarItem) => {
                if (item.authorities) {
                    let flag = false;
                    user &&
                        user?.authorities?.map((authority: AuthorityType) => {
                            item.authorities?.includes(authority) && (flag = true);
                        });
                    if (flag)
                        return (
                            <S.HeaderItem key={item.label} onClick={() => navigate(item.routing)}>
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
                        <BoxPad padding='18px'>
                            <S.HeaderItem key={item.label} onClick={() => navigate(item.routing)}>
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
                        </BoxPad>
                    );
                }
            })}
        </S.Container>
    );
};

export default ForumNavbar;
