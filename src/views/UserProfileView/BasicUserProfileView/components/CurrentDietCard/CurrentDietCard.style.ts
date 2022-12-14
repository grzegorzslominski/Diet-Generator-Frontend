import styled from "styled-components";
import { mainTheme } from "../../../../../themes/mainTheme";

export const Content = styled.div`
    position: relative;
    width: 500px;
    height: 110px;
    border-radius: 10px;
    border: 1px solid ${mainTheme.colors.secondaryColor};
    background: ${mainTheme.colors.primaryColor};
    padding: 10px 24px 0 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    & > div:first-child {
        width: 100%;
    }
`;

export const DetailsContainer = styled.div`
    display: flex;
    gap: 24px;
`;

export const DietDetail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

export const ActionContanier = styled.div`
    padding-right: 2px;
    display: flex;
    justify-content: flex-end;
    position: absolute;
    bottom: -32px;
    right: 0;
`;
