import styled, { css } from "styled-components";

type ContainerProps = {
    gradient?: string;
    mainTheme: any;
};

export const Container = styled.div<ContainerProps>`
    height: fit-content;
    width: fit-content;
    span {
        background: ${({ gradient, mainTheme }) =>
            gradient
                ? gradient
                : css`linear-gradient(90deg, #4E4B77 0%, #6D5E9D 40%, #F44B42 70%, #F05840 100%)`};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
`;
