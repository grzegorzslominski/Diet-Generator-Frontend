import styled, { css } from "styled-components";

type ContainerProps = {
    color: string;
    size: "normal" | "big";
};

export const Container = styled.div<ContainerProps>`
    ${({ size }) =>
        size === "normal"
            ? css`
                  width: 25px;
                  height: 25px;
              `
            : css`
                  width: 35px;
                  height: 35px;
              `}
    border-radius: 50%;
    border: 1px solid ${({ color }) => color};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
        width: auto;
        fill: ${({ color }) => color};

        ${({ size, color }) =>
            size === "normal"
                ? css`
                      height: 15px;
                  `
                : css`
                      height: 25px;
                      line {
                          stroke-width: 4;
                          fill: ${color};
                      }
                  `}
    }
`;
