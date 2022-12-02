import { useAuthViews } from "../../../../hooks/useAuthViews";
import { NavItem, NAV_ITEMS } from "../NavItems";

import CloseButton from "../../../UI/CloseButton/CloseButton";
import Label from "../../../UI/Label/Label";
import ModalPortal from "../../../UI/ModalPortal/ModalPortal";

import * as S from "./MobileMenu.style";
import { mainTheme } from "../../../../themes/mainTheme";

type MobileMenuProps = {
    close: () => void;
};

const MobileMenu = ({ close }: MobileMenuProps) => {
    const { openLoginView, openRegisterView } = useAuthViews();

    const menuClickHandler = (menuItem: NavItem) => {
        if (menuItem.routing || menuItem.external) {
            window.open(menuItem.routing, "_blank");
            close();
        } else {
            if (menuItem.login) {
                openLoginView();
            } else {
                openRegisterView();
            }
        }
    };

    return (
        <ModalPortal blurBackground>
            <S.Container>
                <S.CloseButtonContanier>
                    <CloseButton onClick={close} size='big' color={mainTheme.colors.grey} />
                </S.CloseButtonContanier>
                {NAV_ITEMS.map((menuItem: NavItem) => (
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
                ))}
            </S.Container>
        </ModalPortal>
    );
};

export default MobileMenu;
