import { useNavigate } from "react-router-dom";

import { ReactComponent as LogoutIcon } from "../../assets/icons/navbar/logout.svg";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow-icon.svg";
import { NAV_ITEMS } from "./const/NavVerticalItem";
import useAuth from "../../hooks/useAuth";

import Label from "../UI/Label/Label";

import * as S from "./NavbarVertical.style";

type NavbarVerticalProps = {
    isOpen: boolean;
    handleMenuIsOpen: () => void;
};

const NavbarVertical = ({ isOpen, handleMenuIsOpen }: NavbarVerticalProps) => {
    const navigate = useNavigate();
    const { logoutUser } = useAuth();

    return (
        <S.Container isOpen={isOpen}>
            <Label fontSize='14px' color='#ffffff' textAlign='center'>
                MENU
            </Label>
            <S.NavItemsContainer>
                {NAV_ITEMS.map((navItem) => (
                    <S.NavItem onClick={() => navigate(navItem.routing)} key={navItem.label}>
                        {navItem.icon}
                        <Label fontSize='10px' fontWeight='500' color='white' textAlign='center'>
                            {navItem.label}
                        </Label>
                    </S.NavItem>
                ))}
            </S.NavItemsContainer>
            <S.LogoutContainer onClick={logoutUser} isOpen={isOpen}>
                <LogoutIcon />
                <Label fontSize='12px' fontWeight='500' color='#EEA17B' textAlign='center'>
                    Logout
                </Label>
            </S.LogoutContainer>
            <S.OpenButton isOpen={isOpen} onClick={() => handleMenuIsOpen()}>
                <ArrowIcon />
            </S.OpenButton>
        </S.Container>
    );
};

export default NavbarVertical;
