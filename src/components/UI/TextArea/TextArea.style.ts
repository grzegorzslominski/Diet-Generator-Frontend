import styled, { css } from "styled-components";

type AreaContainerProps = {
    height?: string;
    size?: "normal" | "small";
};

export const AreaContainer = styled.div<AreaContainerProps>`
    height: ${({ height }) => height};
    width: 100%;

    &:focus {
        padding: 0px;
    }
`;

type RowProps = {
    labelIndent: boolean;
};

export const Row = styled.div<RowProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;

    ${({ labelIndent }) =>
        labelIndent &&
        css`
            & > span {
                padding-left: 20px;
            }
        `}
`;

export const StyledInput = styled.textarea<AreaContainerProps>`
    all: unset;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    background: #ffffff;
    border: solid #d9d9d9 1px;
    text-align: left;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    padding: 8px 12px;
    font-size: ${({ size }) => (size === "small" ? "12px" : "14px")};
    line-height: 20px;
    color: #747474;
    border-radius: 5px;
    word-break: break-all;

    ::placeholder {
        font-size: 13px;
        color: "#747474";
        font-weight: 600;
    }

    :-ms-input-placeholder {
        font-size: 13px;
        color: "#747474";
        font-weight: 600;
    }

    ::-ms-input-placeholder {
        font-size: 13px;
        color: "#747474";
        font-weight: 600;
    }
`;

type ContainerProps = {
    width: string;
};

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    position: relative;
    width: ${({ width }) => width};
    height: fit-content;
`;

export const LimitContainer = styled.div`
    display: flex;
    position: absolute;
    bottom: -18px;
    right: 0;
`;

export const ErrorContainer = styled.div`
    position: absolute;
    left: 0;
    bottom: -24px;
`;
