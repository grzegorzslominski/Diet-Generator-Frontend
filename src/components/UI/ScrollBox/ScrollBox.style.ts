import styled from "styled-components";

import { ScrollProps, ContentProps, ContainerProps, CircleProps } from "./ScrollBox.type";

export const Container = styled.div<ContainerProps>`
    display: flex;
    & > * {
        line-height: 1;
    }

    ${({ scrollDistance, scrollPosition }) =>
        scrollPosition === "outside"
            ? `margin-right: -${scrollDistance}px; gap:${scrollDistance}px`
            : ""}
`;

export const Content = styled.div<ContentProps>`
    max-height: ${({ height }) => `${height}px`};
    overflow-y: scroll;
    overflow-x: hidden;

    scrollbar-width: none;
    ::-webkit-scrollbar {
        width: 0px;
    }
    width: ${({ scrollDistance, scrollPosition, hiddenScroll }) =>
        scrollPosition === "inside" && !hiddenScroll ? `calc(100% - ${scrollDistance}px)` : "100%"};
`;

export const Scroll = styled.div<ScrollProps>`
    width: ${({ scrollDistance, scrollPosition }) =>
        scrollPosition === "inside" ? `${scrollDistance}px` : `0`};
    max-height: ${({ height }) => `${height}px`};
    position: relative;
    display: flex;
    justify-content: end;

    ::after {
        content: "";
        height: ${({ height }) => `${height}px`};
        background-color: ${({ theme }) => theme.colors.grey};
        width: 2px;
        position: absolute;
        top: 0;
        right: 6px;
        ${({ hidden }) => (hidden ? `display: none` : "display: flex")}
    }

    & > div {
        z-index: 1;
        width: 12.5px;
        height: 12.5px;
    }
`;

export const Circle = styled.div<CircleProps>`
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.secondaryColor};

    ${({ hidden }) => (hidden ? `display: none` : "display: flex")}

    &:hover {
        cursor: pointer;
    }
`;
