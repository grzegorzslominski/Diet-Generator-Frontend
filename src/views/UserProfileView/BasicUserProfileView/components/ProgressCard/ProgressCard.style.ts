import styled, { css } from "styled-components";
import { mainTheme } from "../../../../../themes/mainTheme";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 9px;
    width: 402px;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    align-items: center;
    height: 115px;
    position: relative;
`;

export const ButtonContainer = styled.div`
    position: absolute;
    right: 0;
    top: -25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
`;

export const WeightButton = styled.div`
    width: 20px;
    height: 20px;
    border: 2px solid ${mainTheme.colors.inputText};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    padding-bottom: 3px;
    cursor: pointer;
`;

export const GoalRange = styled.div`
    display: flex;
    justify-content: space-between;
    width: 370px;
`;

export const CurrentResult = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    position: absolute;
    width: fit-content;
    left: 50%;
    transform: translateX(-50%);
    bottom: 5px;
`;

export const ProgressBarWrapper = styled.div`
    width: 375px;
    height: 375px;
    min-width: 375px;
    min-height: 375px;
    border-radius: 50%;
    border: 3px solid #9a9898;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 20px;
`;

type ProgressBarBackgroundProps = {
    progressValue: number;
};

export const ProgressBarBackground = styled.div<ProgressBarBackgroundProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 380px;
    height: 380px;
    min-width: 380px;
    min-height: 380px;
    border-radius: 50%;
    transition: all 1s;
    ${({ progressValue }) => css`
        background: linear-gradient(
            to right,
            ${mainTheme.colors.secondaryColor} ${`${progressValue + 3}%`},
            rgba(0, 0, 0, 0) 0
        );
    `}
`;

export const ProgressBarTop = styled.div`
    width: 365px;
    height: 365px;
    min-width: 365px;
    min-height: 365px;
    background-color: white;
    border-radius: 50%;
`;
