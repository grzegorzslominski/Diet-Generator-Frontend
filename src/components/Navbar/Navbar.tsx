import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import HamburgerMenu from "react-hamburger-menu";
import Label from "../UI/Label/Label";
import MobileMenu from "./const/MobileMenu/MobileMenu";
import ModalPortal from "../../components/UI/ModalPortal/ModalPortal";
import Login from "../../views/AuthViews/Login/Login";
import Register from "../../views/AuthViews/Register/Register";

import { mainTheme } from "../../themes/mainTheme";
import { NavItem, NAV_ITEMS } from "./const/NavItems";

import * as S from "./Navbar.style";
import { useAuthViews } from "../../hooks/useAuthViews";

type NavbarProps = {
    authorizeUser: () => void;
};

const Navbar = ({ authorizeUser }: NavbarProps) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { openRegisterView, openLoginView } = useAuthViews();

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

    return (
        <>
            <S.Container>
                <S.Logo onClick={() => {}} />
                <S.NavItemsContanier>
                    {NAV_ITEMS.map((navItem) => (
                        <S.NavItem key={navItem.label}>
                            <Label
                                fontSize='16px'
                                fontWeight='500'
                                onClick={() =>
                                    navItem.label === "Sign In"
                                        ? openLoginView()
                                        : navItem.label === "Sign Up"
                                        ? openRegisterView()
                                        : navigationHandler(navItem)
                                }
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
        </>
    );
};

export default Navbar;
