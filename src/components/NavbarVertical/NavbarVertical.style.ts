import styled, { css } from "styled-components";

type ContainerProps = {
    isOpen: boolean;
};

export const Container = styled.div<ContainerProps>`
    position: fixed;
    top: 82px;
    left: 0;
    width: 85px;
    height: calc(100vh - 82px);
    padding-top: 32px;
    background: #48456d;
    transition: all 0.5s;
    display: flex;
    flex-direction: column;
    gap: 60px;
    z-index: 2;

    @media screen and (max-width: 860px) {
        width: 50px;
        padding-top: 60px;

        & > span:first-child {
            display: none;
        }
    }

    @media screen and (max-width: 560px) {
        width: 40px;
        transform: ${({ isOpen }) => (isOpen ? "translateX(0px)" : "translateX(-40px)")};
    }
`;

export const NavItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
    padding: 0 5px 0 5px;

    @media screen and (max-width: 860px) {
        gap: 65px;
    }
`;

export const NavItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    cursor: pointer;

    svg {
        transition: all 250ms ease-out;
        transform: scale3d(1, 1, 1);
        height: 20px;
        width: auto;
    }

    &:hover {
        svg {
            transform: scale3d(1.1, 1.1, 1.1);
        }
    }

    @media screen and (max-width: 860px) {
        & > span:last-child {
            display: none;
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

    @media screen and (max-width: 860px) {
        & > span:last-child {
            display: none;
        }
    }
`;

type OpenButtonProps = {
    isOpen: boolean;
};

export const OpenButton = styled.div<OpenButtonProps>`
    position: absolute;
    top: 50%;
    right: -16px;
    width: 15px;
    height: 60px;
    background: white;
    backdrop-filter: blur(10px);
    transform: translateY(-50%);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        transition: all 0.5s;
        width: 10px;
        fill: #48456d;
        rotate: ${({ isOpen }) => (isOpen ? "-90deg" : "90deg")};
    }

    @media screen and (min-width: 561px) {
        display: none;
    }
`;
