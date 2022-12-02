
import React  from "react";
import * as S from "./NavbarVertical.style"
import {NavItem, NAV_ITEMS} from "./const/NavVerticalItem";
import { useLocation, useNavigate } from "react-router-dom";
import Label from "../UI/Label/Label";

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
      <S.NavItemsContainer>
        <S.LabelContainer>
        <Label
          color='white'
          textAlign='center'
        >
          MENU
        </Label>
        </S.LabelContainer>
        {NAV_ITEMS.map((navItem) => (
          <React.Fragment key={navItem.label}>
          <S.NavItem onClick={() => navigationHandler(navItem)}>
            <Label
              fontSize='18px'
              fontWeight='500'
              color='white'
              textAlign='center'
            >
              {navItem.label}
            </Label>
            {navItem.image}
          </S.NavItem>
          </React.Fragment>
        ))}
      </S.NavItemsContainer>

    </S.Container>
  );
};

export default NavbarVertical;