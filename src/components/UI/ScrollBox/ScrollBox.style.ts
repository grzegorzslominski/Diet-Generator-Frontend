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
    width: ${({ scrollDistance, scrollPosition }) =>
        scrollPosition === "inside" ? `calc(100% - ${scrollDistance}px)` : "100%"};
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
        background-color: #161819;
        width: 3px;
        position: absolute;
        top: 0;
        right: 5px;
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
    background: linear-gradient(
        90deg,
        #ff893c 0%,
        #d57680 14%,
        #aa64bb 32%,
        #8b65dc 49%,
        #6d7cf1 66%,
        #4abcfb 82%,
        #3ef7ef 100%
    );

    ${({ hidden }) => (hidden ? `display: none` : "display: flex")}

    &:hover {
        cursor: pointer;
    }
`;
