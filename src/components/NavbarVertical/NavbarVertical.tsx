import { useLocation, useNavigate } from "react-router-dom";

import { NavItem, NAV_ITEMS } from "./const/NavVerticalItem";
import { ReactComponent as LogoutIcon } from "../../assets/icons/navbar/logout.svg";

import Label from "../UI/Label/Label";

import * as S from "./NavbarVertical.style";

const NavbarVertical = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navigationHandler = (item: NavItem) => {
        if (item.routing) {
            if (item.external) {
                window.open(item.routing, "_self");
            } else navigate(item.routing);
        }
    };
    return (
        <S.Container>
            <Label fontSize='14px' color='#ffffff' textAlign='center'>
                MENU
            </Label>
            <S.NavItemsContainer>
                {NAV_ITEMS.map((navItem) => (
                    <S.NavItem onClick={() => navigationHandler(navItem)} key={navItem.label}>
                        {navItem.icon}
                        <Label fontSize='10px' fontWeight='500' color='white' textAlign='center'>
                            {navItem.label}
                        </Label>
                    </S.NavItem>
                ))}
            </S.NavItemsContainer>
            <S.LogoutContanier onClick={() => {}}>
                <LogoutIcon />
                <Label fontSize='12px' fontWeight='500' color='#EEA17B' textAlign='center'>
                    Logout
                </Label>
            </S.LogoutContanier>
        </S.Container>
    );
};

export default NavbarVertical;
