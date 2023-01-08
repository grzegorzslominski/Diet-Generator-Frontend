import styled, { css } from "styled-components";
import { mainTheme } from "../../../themes/mainTheme";

type ContainerProps = {
    width: string;
    labelIndent?: boolean;
};

export const Container = styled.div<ContainerProps>`
    position: relative;
    display: flex;
    flex-direction: column;
    width: ${({ width }) => width};
    outline: none;
    height: fit-content;

    ${({ labelIndent }) =>
  labelIndent &&
  css`
            & > span {
                padding-left: 24px;
            }
        `}
`;

export const InnerContainer = styled.div`
    display: flex;
    width: 100%;
    outline: none;
    height: fit-content;
`;

type CustomSelectProps = {
    error?: string;
    label?: string;
    border?: string;
    borderRadius?: string;
    size: "small" | "medium" | "auto";
    disabled?: boolean;
    background?: string;
};

export const CustomSelect = styled.div<CustomSelectProps>`
    position: relative;
    display: flex;
    padding: 6px 0 2px 0;
    height: ${({ size }) => (size === "medium" ? "42px" : size === "small" ? "30px" : "auto")};
    ${({ border }) => (border ? `border: ${border} ;` : "")};
    width: 100%;
    flex-direction: column;
    background: ${({ background }) => (background ? background : "transparent")};
    border-radius: ${({ borderRadius }) => borderRadius};
    text-align: left;
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    line-height: 12px;
    border-bottom: solid 1px #d9d9d9;
    font-weight: 600;
    color: ${mainTheme.colors.grey};
    width: 100%;

    & span {
        pointer-events: none;
    }

    &:hover {
        cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    }
`;

type ValueContainerProps = {
    textOverflow: string;
};

export const ValueContainer = styled.div<ValueContainerProps>`
    width: calc(100% - 45px);
    overflow: hidden;
    text-overflow: ${({ textOverflow }) => textOverflow};
    display: inline-block;
`;

export const SelectTrigger = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    height: 100%;
    overflow: hidden;
    white-space: nowrap;
`;

type ArrowProps = {
    disabled?: boolean;
};

export const Arrow = styled.div<ArrowProps>`
    position: absolute;
    right: 8px;
    margin-bottom: 4px;
    border: solid #a0a0a0;
    border-width: 0 1px 1px 0;
    display: inline-block;
    padding: 2px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);

    ${({ disabled }) =>

        disabled &&
        css`
            display: none;
        `}
`;

type CustomOptionsProps = {
    show?: boolean;
    background: string;
    optionsPosition: "top" | "bottom";
    maxHeight: number;
};

export const CustomOptions = styled.div<CustomOptionsProps>`
    position: absolute;
    display: ${(props) => (props.show ? "block" : "none")};
    top: ${({ optionsPosition, maxHeight }) =>
  optionsPosition === "bottom"
    ? "calc(100% + 8px)"
    : "calc(0px + 24px - " + maxHeight + "px)"};
    max-height: ${({ maxHeight }) => maxHeight}px;
    left: 0;
    min-width: 100%;
    max-width: 100%;
    transition: all 0.5s;
    -webkit-transition: opacity 0.5s;
    opacity: ${(props) => (props.show ? 1 : 0)};
    pointer-events: ${(props) => (props.show ? "all" : "none")};
    background: ${({ background }) => (background ? background : "#161819")};

    border-radius: 6px;
    z-index: 10;
`;

export const ErrorContainer = styled.div`
    display: flex;
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
`;

type SearchInputProps = {
    background: string;
};

export const SearchInput = styled.input<SearchInputProps>`
    all: unset;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding-left: 24px;
    width: calc(100% - 45px);
    display: inline-block;
    background: ${({ background }) => background};
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    color: ${mainTheme.colors.grey};
`;

export const AddOption = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    min-height: 48px;
    gap: 16px;

    &:hover {
        cursor: pointer;
        background: #1b1d1f;
    }
`;