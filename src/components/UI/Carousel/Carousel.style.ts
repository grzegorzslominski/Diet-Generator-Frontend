import styled, { css } from "styled-components";

export type CarouselContainerProps = {
    buttonVersion: "arrows" | "dots";
};

export const CarouselContainer = styled.div<CarouselContainerProps>`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: ${({ buttonVersion }) =>
        buttonVersion === "arrows" ? "center" : "flex-start"};
    height: auto;
`;

export const CarouselInner = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;

    & > * {
        height: 100%;
    }
`;

type ContentProps = {
    translateExp: string;
    gap: number;
    scrollAxie?: "vertical" | "horizontal";
    buttonVersion: "arrows" | "dots";
    maxHeight?: string;
};

export const Content = styled.div<ContentProps>`
    white-space: nowrap;
    transition: transform 0.85s;
    transform: ${({ translateExp }) => translateExp};
    display: flex;
    flex-direction: ${({ scrollAxie, buttonVersion }) =>
        scrollAxie === "vertical" && buttonVersion === "dots" ? "column" : "row"};
    gap: 0 ${({ gap }) => `${gap}px`};
    height: 100%;
    ${({ maxHeight }) =>
        maxHeight &&
        css`
            max-height: ${maxHeight};
        `}

    & > * {
        cursor: grab;
    }
`;

type ArrowButtonProps = {
    arrowsColor: string;
    position: "left" | "right";
    buttonPosition?: {
        horizontal?: number;
        vertical?: number;
        individualPosition?: {
            horizontal?: number;
            vertical?: number;
        };
    };
};

export const ArrowButton = styled.div<ArrowButtonProps>`
    display: flex;
    justify-content: center;
    position: absolute;

    top: ${({ buttonPosition }) => {
        if (buttonPosition?.individualPosition?.vertical)
            return `${buttonPosition.individualPosition.vertical}px`;
        if (buttonPosition?.vertical) return `${buttonPosition.vertical}px`;
        return "calc((100% - 37.5px) / 2)";
    }};
    ${({ position, buttonPosition }) => {
        if (buttonPosition?.individualPosition?.horizontal)
            return `right: ${buttonPosition.individualPosition.horizontal}px`;
        if (buttonPosition) {
            if (position === "left") return `left: ${buttonPosition.horizontal}px`;
            return `right: ${buttonPosition.horizontal}px`;
        }
    }};

    background: transparent;
    transform: rotateZ(90deg);
    transform: rotateZ(${({ position }) => (position === "right" ? "90deg" : "-90deg")});

    svg {
        width: 20px;
        height: auto;
    }

    g,
    path {
        color: ${({ arrowsColor }) => arrowsColor};
        fill: ${({ arrowsColor }) => arrowsColor};
    }

    :hover {
        cursor: pointer;
    }
    @media screen and (max-width: 560px) {
        display: none;
    }
`;

export const DotsContainer = styled.div`
    position: absolute;
    top: calc(50%);
    right: -24px;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    height: fit-content;
    gap: 12px;
`;

type DotButtonProps = {
    active: boolean;
};

export const DotButton = styled.div<DotButtonProps>`
    background: ${({ theme, active }) =>
        active ? theme.gradients.buttonGradient : theme.colors.grey};
    border-radius: 50%;
    width: 10px;
    height: 10px;
    cursor: pointer;

    @media screen and (max-width: 840px) {
        width: 16px;
        height: 16px;
    }
`;
