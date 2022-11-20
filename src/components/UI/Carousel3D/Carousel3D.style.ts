import styled, { css } from "styled-components";
import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow-icon.svg";
import { mainTheme } from "../../../themes/mainTheme";

export const Container = styled.div`
    position: relative;
    width: 100%;
    transition-property: all;
    transition-duration: 1s;
    display: flex;
`;

export const ContentWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    padding-top: 20px;
`;

type ContentProps = {
    offset: number;
    gap: number;
};

export const Content = styled.div<ContentProps>`
    display: flex;

    width: 100%;
    transition-property: all;
    transition-duration: 0.5s;

    gap: ${({ gap }) => `${gap}px`};

    ${({ offset }) =>
        css`
            transform: translateX(${`${offset}px`});

            @media screen and (max-width: 760px) {
                transform: translateX(calc(${`${offset}px`} - 180px));
            }
        `}
`;

type ButtonsContainerProps = {
    buttonPosition: "edges" | "bottom";
};

export const ButtonsContainer = styled.div<ButtonsContainerProps>`
    position: absolute;
    display: flex;
    justify-content: space-between;

    ${({ buttonPosition }) =>
        buttonPosition === "edges"
            ? css`
                  width: 105%;
                  justify-content: space-between;
                  top: calc(50% - 5px);
                  left: -2.5%;
              `
            : css`
                  width: 12rem;
                  bottom: -40px;
                  left: calc(50%);
                  transform: translateX(-50%);

                  @media screen and (max-width: 480px) {
                      bottom: -25px;
                  }
              `}
`;

type ArrowProps = {
    first?: boolean;
    second?: boolean;
    disabled: boolean;
};

export const Arrow = styled(ArrowIcon)<ArrowProps>`
    height: 20px;

    transform: rotate(${({ first, second }) => (first ? "270deg" : "90deg")});

    ${({ disabled }) =>
        disabled
            ? css`
                  fill: ${mainTheme.colors.grey};
                  opacity: 0.5;
              `
            : css`
                  cursor: pointer;
              `}
`;

type CarouselItemProps = {
    active: boolean;
};

export const CarouselItem = styled.div<CarouselItemProps>`
    transition-property: all;
    transition-duration: 0.7s;
    transition-delay: 0.2s;
    cursor: pointer;

    ${({ active }) =>
        !active
            ? css`
                  transform: perspective(3000px) rotateY(67.5deg);
                  width: 15rem;
                  span {
                      opacity: 0;
                  }

                  @media screen and (max-width: 1440px) {
                      width: 11rem;
                  }
              `
            : css`
                  transform: perspective(2500px) rotateY(0deg);
                  padding-right: 20px;
                  width: 35rem;

                  @media screen and (max-width: 1440px) {
                      width: 30rem;
                  }

                  @media screen and (max-width: 960px) {
                      width: 28rem;
                  }

                  span {
                      transition-property: opacity;
                      transition-duration: 1s;
                      transition-delay: 0.7s;
                      opacity: 1;
                  }
              `}
`;
