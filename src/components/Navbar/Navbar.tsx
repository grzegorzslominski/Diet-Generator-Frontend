import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HamburgerMenu from "react-hamburger-menu";

import { mainTheme } from "../../themes/mainTheme";

import Label from "../UI/Label/Label";
import MobileMenu from "./const/MobileMenu/MobileMenu";

import { NavItem, NAV_ITEMS } from "./const/NavItems";

import * as S from "./Navbar.style";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClickItemModal = () => setIsOpen((current) => !current);

    useEffect(() => {
        if (mobileMenuOpen) setMobileMenuOpen(false);
    }, [location.pathname]);

    const navigationHandler = (item: NavItem) => {
        if (item.routing) {
            if (item.external) {
                window.open(item.routing, "_self");
            } else navigate(item.routing);
        }
    };

    return (
        <S.Container>
            <S.Logo onClick={() => {}} />
            <S.NavItemsContanier>
                {NAV_ITEMS.map((navItem) => (
                    <S.NavItem key={navItem.label}>
                        <Label
                            fontSize='18px'
                            fontWeight='500'
                            onClick={() => navigationHandler(navItem)}
                        >
                            {navItem.label}
                        </Label>
                    </S.NavItem>
                ))}
            </S.NavItemsContanier>
            <S.MobileMenuHamburger>
                <HamburgerMenu
                    width={22}
                    height={18}
                    strokeWidth={4}
                    animationDuration={0.5}
                    isOpen={mobileMenuOpen}
                    menuClicked={() => setMobileMenuOpen((prev: boolean) => !prev)}
                    color={mainTheme.colors.secondaryColor}
                />
            </S.MobileMenuHamburger>
            {mobileMenuOpen && <MobileMenu close={() => setMobileMenuOpen(false)} />}
        </S.Container>
    );
};

export default Navbar;
