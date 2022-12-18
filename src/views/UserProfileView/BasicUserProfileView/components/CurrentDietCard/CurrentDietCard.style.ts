import styled from "styled-components";
import { mainTheme } from "../../../../../themes/mainTheme";

export const Content = styled.div`
    position: relative;
    width: 572px;
    height: 95px;
    border-radius: 10px;
    border: 1px solid ${mainTheme.colors.secondaryColor};
    background: ${mainTheme.colors.primaryColor};
    padding: 10px 28px 0 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;

    & > div:first-child {
        width: 100%;
    }

    @media screen and (max-width: 1600px) and (min-width: 1281px) {
        width: 672px;
    }

    @media screen and (max-width: 1220px) and (min-width: 821px) {
        width: 672px;
    }

    @media screen and (max-width: 821px) {
        width: 272px;
        padding: 12px;
        height: auto;
        gap: 12px;
    }
`;

export const DetailsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media screen and (max-width: 821px) {
        display: grid;
        grid-template-columns: repeat(3, 75px);
        justify-content: flex-start;
        gap: 18px;
    }
`;

export const DietDetail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    @media screen and (max-width: 821px) {
        align-items: flex-start;
    }
`;

export const ActionContanier = styled.div`
    display: flex;
    justify-content: flex-end;
    position: absolute;
    bottom: -28px;
    right: 0;
`;
