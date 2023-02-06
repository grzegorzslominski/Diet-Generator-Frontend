import styled, { css } from "styled-components";

type ContainerProps = {
    size: "normal" | "small";
};

export const Container = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    gap: 12px;

    :hover {
        cursor: pointer;
    }

    img {
        ${({ size }) =>
            size === "normal"
                ? css`
                      min-width: 40px;
                      width: 40px;
                      max-width: 40px;
                      height: 40px;
                  `
                : css`
                      min-width: 25px;
                      width: 25px;
                      max-width: 25px;
                      height: 25px;
                  `}

        object-fit: cover;
        object-position: center;
        border-radius: 50%;
    }
`;
