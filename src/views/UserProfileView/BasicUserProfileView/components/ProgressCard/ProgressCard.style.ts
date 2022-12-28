import styled, { css } from "styled-components";
import { mainTheme } from "../../../../../themes/mainTheme";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    width: 352px;

    @media screen and (max-width: 820px) {
        width: 272px;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    align-items: center;
    height: 90px;
    position: relative;
`;

export const ButtonContainer = styled.div`
    position: absolute;
    right: -8px;
    top: -18px;
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
    width: 320px;

    @media screen and (max-width: 820px) {
        width: 280px;
    }
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
    width: 335px;
    height: 335px;
    min-width: 335px;
    min-height: 335px;
    border-radius: 50%;
    border: 3px solid #9a9898;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10px;

    @media screen and (max-width: 820px) {
        width: 280px;
        height: 280px;
        min-width: 280px;
        min-height: 280px;
    }
`;

type ProgressBarBackgroundProps = {
    progressValue: number;
};

export const ProgressBarBackground = styled.div<ProgressBarBackgroundProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 320px;
    height: 320px;
    min-width: 320px;
    min-height: 320px;
    border-radius: 50%;
    transition: all 1s;
    ${({ progressValue }) => css`
        background: linear-gradient(
            to right,
            ${mainTheme.colors.secondaryColor} ${`${progressValue + 3}%`},
            rgba(0, 0, 0, 0) 0
        );
    `}

    @media screen and (max-width: 820px) {
        width: 285px;
        height: 285px;
        min-width: 285px;
        min-height: 285px;
    }
`;

export const ProgressBarTop = styled.div`
    width: 325px;
    height: 325px;
    min-width: 325px;
    min-height: 325px;
    background-color: white;
    border-radius: 50%;

    @media screen and (max-width: 820px) {
        width: 275px;
        height: 275px;
        min-width: 275px;
        min-height: 275px;
    }
`;
