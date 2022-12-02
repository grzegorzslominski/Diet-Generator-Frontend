import styled, { css } from "styled-components";
import { mainTheme } from "../../../themes/mainTheme";

import { InputContainerProps, InputProps } from "./Input.type";

export const StyledInput = styled.input<InputProps>``;

export const Container = styled.div<InputContainerProps>`
    display: flex;
    flex-direction: column;
    position: relative;
    width: ${({ width }) => width};
    gap: 8px;

    ${({ labelIndent }) =>
        labelIndent &&
        css`
            & > span {
                padding-left: 24px;
            }
        `}
`;

export const InputContainer = styled.div<InputContainerProps>`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #d9d9d9;
    padding-left: 12px;
    svg {
        height: 15px;
        width: auto;
    }

    input {
        all: unset;
        width: 100%;
        text-align: left;
        font-family: "Montserrat", sans-serif;
        box-sizing: border-box;
        padding: 6px 24px;
        font-size: 0.8rem;

        color: ${mainTheme.colors.inputText};
        margin-top: ${({ label, type }) => (label && type !== "date" ? "6px" : "0")};
        opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

        ::placeholder {
            font-size: 12px;
            color: ${mainTheme.colors.grey};
            font-weight: 400;
        }

        :-ms-input-placeholder {
            font-size: 12px;
            color: ${mainTheme.colors.grey};
            font-weight: 400;
        }

        ::-ms-input-placeholder {
            font-size: 12px;
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
