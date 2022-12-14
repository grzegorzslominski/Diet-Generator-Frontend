import styled from "styled-components";
import { mainTheme } from "../../../../../../../themes/mainTheme";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 250px;
    border: solid 1px ${mainTheme.colors.secondaryColor};
    background-color: ${mainTheme.colors.primaryColor};
    border-radius: 8px;
    padding: 8px 16px 12px 16px;
`;

export const TopSection = styled.div`
    display: flex;
    justify-content: space-between;
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
