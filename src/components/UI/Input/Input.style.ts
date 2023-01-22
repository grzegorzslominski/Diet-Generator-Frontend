import styled, { css } from "styled-components";
import { mainTheme } from "../../../themes/mainTheme";

import { InputContainerProps, InputProps } from "./Input.type";

export const StyledInput = styled.input<InputProps>``;

export const Container = styled.div<InputContainerProps>`
    display: flex;
    flex-direction: column;
    position: relative;
    width: ${({ width }) => width};

    ${({ labelIndent }) =>
        labelIndent &&
        css`
            & > span {
                padding-left: 36px;
            }
        `}

    ${({ size }) =>
        size === "normal" &&
        css`
            gap: 8px;
        `}
`;

export const InputContainer = styled.div<InputContainerProps>`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 0 3px;
    ${({ type, disabled, showErrorMessage, theme, error }) =>
        type !== "date" &&
        css`
            border-bottom: 1px solid
                ${!showErrorMessage && error
                    ? theme.colors.error
                    : disabled
                    ? "#B0B0B0"
                    : "#d9d9d9"};
        `}
    svg {
        margin-top: 4px;
        height: 17px;
        width: auto;
    }

    input {
        all: unset;
        width: 100%;
        text-align: left;
        font-family: "Montserrat", sans-serif;
        box-sizing: border-box;
        padding: 6px 0px 2px 0px;
        font-size: ${({ size }) => (size === "normal" ? "15px" : "12px")};
        font-weight: 600;
        color: ${mainTheme.colors.grey};
        margin-top: ${({ label, type }) => (label && type !== "date" ? "6px" : "0")};
        opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

        ::placeholder {
            font-size: 12px;
            line-height: 12px;
            color: ${mainTheme.colors.grey};
            font-weight: 400;
        }

        :-ms-input-placeholder {
            font-size: 12px;
            line-height: 12px;
            color: ${mainTheme.colors.grey};
            font-weight: 400;
        }

        ::-ms-input-placeholder {
            font-size: 12px;
            line-height: 12px;
            color: ${mainTheme.colors.grey};
            font-weight: 400;
        }

        &:hover {
            cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};
        }
    }

    input[type="number"] {
        -moz-appearance: textfield;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`;

type ErrorContainerProps = {
    labelIndent?: boolean;
};

export const ErrorContainer = styled.div<ErrorContainerProps>`
    display: flex;
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
`;
