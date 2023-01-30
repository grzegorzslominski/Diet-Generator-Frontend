import styled, { css } from "styled-components";

type ContainerProps = {
    size: "small" | "normal";
    disable: boolean;
};

export const Container = styled.div<ContainerProps>`
    display: flex;
    position: relative;
    width: ${({ size }) => (size === "normal" ? "55px" : "25px")};
    height: ${({ size }) => (size === "normal" ? "25px" : "16px")};
    border: 1px solid ${({ theme }) => theme.colors.textColor};
    border-radius: 35px;

    :hover {
        cursor: pointer;
    }

    ${({ disable }) =>
        disable &&
        css`
            opacity: 0.3;
        `}
`;

type SwitchDotProps = {
    size: "small" | "normal";
    active?: boolean;
};

export const SwitchDot = styled.div<SwitchDotProps>`
    width: ${({ size }) => (size === "normal" ? "18px" : "8px")};
    height: ${({ size }) => (size === "normal" ? "18px" : "8px")};
    background: ${({ theme }) => theme.colors.textColor};
    border-radius: 50%;
    position: absolute;
    top: ${({ size }) => (size === "normal" ? "2px" : "3px")};
    left: 3px;
    transition: linear 200ms;

    ${({ active }) =>
        active &&
        css`
            transform: translateX(155%);
        `}
`;
