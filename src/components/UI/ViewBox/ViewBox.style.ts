import styled, { css } from "styled-components";

type ContainerProps = {
    paddintTop: boolean;
    maxWidth: string;
};

export const Container = styled.div<ContainerProps>`
    width: calc(100% - 80px);
    max-width: ${({ maxWidth }) => maxWidth};
    display: flex;
    justify-content: center;
    position: relative;
    ${({ paddintTop }) =>
        paddintTop &&
        css`
            padding-top: 46px;
            @media screen and (max-width: 560px) {
                padding-top: 24px;
            }
        `}

    @media screen and (max-width: 1720px) {
        width: 100%;
    }
`;
