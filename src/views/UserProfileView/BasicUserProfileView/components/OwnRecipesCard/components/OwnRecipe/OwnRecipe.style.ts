import styled from "styled-components";
import { mainTheme } from "../../../../../../../themes/mainTheme";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;

    width: 252px;
    border: solid 1px ${mainTheme.colors.secondaryColor};
    background-color: ${mainTheme.colors.primaryColor};
    border-radius: 8px;
    padding: 8px 16px 12px 16px;

    @media screen and (max-width: 1280px) and (min-width: 821px) {
        width: 213px;
        padding: 6px 12px 8px 12px;
    }

    @media screen and (max-width: 820px) {
        width: 272px;
        padding: 6px 12px 8px 12px;
    }
`;

export const TopSection = styled.div`
    display: flex;
    gap: 6px;
    justify-content: space-between;

    span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export const MealValuesSection = styled.div`
    display: flex;
    gap: 24px;
    align-items: flex-end;
    justify-content: space-between;
`;

export const CaloriesValueContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
`;
