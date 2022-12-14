import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 82px;
    left: 0;
    width: 80px;
    height: calc(100vh - 82px);
    padding-top: 32px;
    background: #48456d;
    display: flex;
    flex-direction: column;
    gap: 60px;

    @media screen and (max-width: 870px) {
        display: none;
    }
`;

export const NavItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
    padding: 0 5px 0 5px;
`;

export const NavItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    cursor: pointer;

    svg {
        transition: all 250ms ease-out;
        transform: scale3d(1, 1, 1);
        height: 18px;
        width: auto;
    }

    &:hover {
        svg {
            transform: scale3d(1.1, 1.1, 1.1);
        }
    }
`;

export const LogoutContanier = styled.div`
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    cursor: pointer;

    svg {
        height: 22px;
        width: auto;
    }
`;
