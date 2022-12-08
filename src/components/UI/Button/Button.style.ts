import styled, { css } from "styled-components";

import { ButtonContainerProps, ButtonProps } from "./Button.type";

export const ButtonContainer = styled.div<ButtonContainerProps>`
    position: relative;
    width: ${({ width }) => width};
    height: ${({ size }) =>
        size === "big" ? "64px" : size === "medium" ? "45px" : size === "small" ? "40px" : "25px"};
`;

export const InnerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;

export const SpinnerContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const StyledButton = styled.button<ButtonProps>`
    all: unset;
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${({ borderRadius }) => borderRadius};
    background: ${({ theme, styleType, background }) =>
        styleType === "primary" && !background ? theme.gradients.buttonGradient : background};
    //transition: all 0.2s ease-out;
    opacity: ${({ disabled, isLoading }) =>
        isLoading && disabled ? "0.9" : disabled ? "0.2" : "1"};

    & > div {
        display: flex;

        span {
            line-height: 110%;
        }
    }

    & span {
        pointer-events: none;
    }

    &:hover {
        cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    }

    /* &:active {
        transform: ${({ disabled }) => (disabled ? "scale(1)" : "scale(0.975)")};
    } */

    &:focus {
        outline: none;
    }

    ${({ styleType, borderRadius, gradient, borderWidth }) =>
        styleType === "secondary" &&
        css`
            &::before {
                content: "";
                position: absolute;
                inset: 0;
                border-radius: ${borderRadius};
                padding: ${borderWidth};
                background: ${({ theme }) => (gradient ? gradient : theme.gradients.mainGradient)};
                -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                -webkit-mask-composite: xor;
                mask-composite: exclude;
                pointer-events: none;
            }
        `}
`;
