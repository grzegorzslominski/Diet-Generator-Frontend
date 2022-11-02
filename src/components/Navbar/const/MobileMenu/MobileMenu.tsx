import Label from "../../../UI/Label/Label";

import { NavItem, NAV_ITEMS } from "../NavIteams";

import * as S from "./MobileMenu.style";

type MobileMenuProps = {
    close: () => void;
};

const MobileMenu = ({ close }: MobileMenuProps) => {
    const menuClickHandler = (menuItem: NavItem) => {
        window.open(menuItem.routing, "_blank");
        close();
    };

    return (
        <S.Container>
            {NAV_ITEMS.map((menuItem: NavItem) => (
                <Label
                    key={menuItem.label}
                    fontSize='32px'
                    hoverColor='gradient'
                    fontFamily='Poppins'
                    fontWeight='300'
                    color='#d9d9d9'
                    onClick={() => menuClickHandler(menuItem)}
                >
                    {menuItem.label}
                </Label>
            ))}
        </S.Container>
    );
};

export default MobileMenu;
