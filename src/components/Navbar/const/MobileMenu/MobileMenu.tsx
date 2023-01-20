import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { useAuthViews } from "../../../../hooks/useAuthViews";
import { NavItem, NAV_ITEMS } from "../NavItems";

import ActionButton from "../../../UI/ActionButton/ActionButton";
import ModalPortal from "../../../UI/ModalPortal/ModalPortal";
import Label from "../../../UI/Label/Label";

import { TStore } from "../../../../redux/store/store";

import * as S from "./MobileMenu.style";

type MobileMenuProps = {
    close: () => void;
};

const MobileMenu = ({ close }: MobileMenuProps) => {
    const navigate = useNavigate();
    const user = useSelector((state: TStore) => state?.userReducer);
    const { openLoginView, openRegisterView } = useAuthViews();

    const navigationHandler = (item: NavItem) => {
        if (item.routing) {
            if (item.external) {
                window.open(item.routing, "_self");
            } else navigate(item.routing);
        }
    };

    const menuClickHandler = (menuItem: NavItem) => {
        navigationHandler(menuItem);
        if (menuItem.label === "Sign In") {
            openLoginView();
        } else if (menuItem.label === "Sign Up") {
            openRegisterView();
        } else {
            navigationHandler(menuItem);
        }
        close();
    };

    return (
        <ModalPortal blurBackground close={() => {}}>
            <S.Container>
                <S.CloseButtonContanier>
                    <ActionButton type='remove' onClick={close} />
                </S.CloseButtonContanier>
                {NAV_ITEMS.map((menuItem: NavItem) => {
                    if (
                        menuItem.access === "all" ||
                        (menuItem.access === "authorized" && user) ||
                        (menuItem.access === "unauthorized" && !user)
                    )
                        return (
                            <Label
                                key={menuItem.label}
                                fontSize='32px'
                                hoverColor='gradient'
                                fontFamily='Lato'
                                fontWeight='400'
                                color='#d9d9d9'
                                width='fit-content'
                                onClick={() => menuClickHandler(menuItem)}
                            >
                                {menuItem.label}
                            </Label>
                        );
                })}
            </S.Container>
        </ModalPortal>
    );
};

export default MobileMenu;
