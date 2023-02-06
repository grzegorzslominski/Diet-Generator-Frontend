import styled from "styled-components";
import { mainTheme } from "../../../../../themes/mainTheme";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding-bottom: 6px;
`;

export const HeaderRightSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 6px;
`;

export const Icons = styled.div`
    display: flex;
    gap: 12px;
`;

export const MidSection = styled.div`
    display: grid;

    grid-template-columns: 260px 1fr;
    gap: 24px;

    img {
        width: 100%;
        height: 180px;
        object-fit: cover;
        object-position: center;
        border-radius: 10px;
        justify-self: center;
    }

    @media screen and (max-width: 1250px) {
        grid-template-columns: 220px 1fr;
    }

    @media screen and (max-width: 580px) {
        grid-template-columns: 1fr;

        img {
            width: 85%;
            object-fit: cover;
            object-position: center;
            border-radius: 10px;
        }
    }
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    svg {
        transition: all 1s;
        height: 15px;
        max-height: 15px;
        width: auto;
        fill: ${mainTheme.colors.secondaryColor};
        path {
            stroke: 2px;
            fill: ${mainTheme.colors.secondaryColor};
        }

        :hover {
            cursor: pointer;
            transform: scale(1.05);
        }
    }
`;
export const Footer = styled.div`
    padding-top: 12px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;

    @media screen and (max-width: 1250px) {
        padding-top: 12px;
    }
`;