import styled, { css } from "styled-components";

export const Container = styled.div`
    position: relative;
    z-index: 50;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
`;
export const ContainerBG = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(245, 245, 245, 0.5);
    height: 100vh;
    width: 100vw;
`;

type ContentProps = {
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

export const Content = styled.div<ContentProps>`
    position: fixed;

    ${({ position }) =>
        position
            ? css`
                  ${position === "top-left" || position === "top-right"
                      ? `top: 15px; ${position === "top-left" ? "left: 15px;" : "right: 15px"}`
                      : `bottom: 15px; ${
                            position === "bottom-left" ? "left: 15px;" : "right: 15px"
                        }`}
              `
            : css`
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
              `}
`;
