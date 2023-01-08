import styled from "styled-components";

type ContainerProps = {
    padding: string;
};

export const Container = styled.div<ContainerProps>`
    padding: ${({ padding }) => padding};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

type ContentProps = {
    gap: string;
};

export const Content = styled.div<ContentProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ gap }) => gap};
`;
