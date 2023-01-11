import { useLocation, useNavigate } from "react-router-dom";
import { useAuthViews } from "../../hooks/useAuthViews";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";

import { NavItem, NAV_ITEMS } from "./const/NavItems";
import { mainTheme } from "../../themes/mainTheme";

import MobileMenu from "./const/MobileMenu/MobileMenu";
import HamburgerMenu from "react-hamburger-menu";
import Label from "../UI/Label/Label";

import { TStore } from "../../redux/store/store";

import * as S from "./Navbar.style";
import { NAVIGATION } from "../../navigation/paths";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { openRegisterView, openLoginView } = useAuthViews();
    const { logoutUser } = useAuth();

    const user = useSelector((state: TStore) => state?.userReducer);
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

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

    const navbarClickHandler = (navItem: NavItem) => {
        navigationHandler(navItem);
        navItem.label === "Sign In"
            ? openLoginView()
            : navItem.label === "Sign Up"
            ? openRegisterView()
            : navItem.label === "Logout" && logoutUser();
    };

    return (
        <>
            <S.Container>
                <S.Logo onClick={() => navigate(NAVIGATION.default)} />
                <S.NavItemsContanier>
                    {NAV_ITEMS.map((navItem: NavItem) => {
                        if (
                            navItem.access === "all" ||
                            (navItem.access === "authorized" && user) ||
                            (navItem.access === "unauthorized" && !user)
                        )
                            return (
                                <S.NavItem key={navItem.label}>
                                    <Label
                                        fontSize='15px'
                                        fontWeight='500'
                                        onClick={() => navbarClickHandler(navItem)}
                                    >
                                        {navItem.label}
                                    </Label>
                                </S.NavItem>
                            );
                    })}
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
        </>
    );
};

export default Navbar;
