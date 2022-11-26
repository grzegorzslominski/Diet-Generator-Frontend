import styled from "styled-components";

import { ReactComponent as FoodieLogo } from "../../assets/foodie.svg";

export const Container = styled.div`
    position: sticky;
    height: 5%;
    top: 0;
    padding: 12px 32px 12px 32px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: white;
    z-index: 2;
`;

export const Logo = styled(FoodieLogo)`
    height: 50px;
    width: auto;

    :hover {
        cursor: pointer;
    }
`;

export const NavItemsContanier = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;

    @media screen and (max-width: 960px) {
        display: none;
    }
`;

export const NavItem = styled.div``;

export const MobileMenuHamburger = styled.div`
    display: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;

    &:hover {
        cursor: pointer;
    }

    @media screen and (max-width: 960px) {
        display: block;
        z-index: 999999;
    }
`;
