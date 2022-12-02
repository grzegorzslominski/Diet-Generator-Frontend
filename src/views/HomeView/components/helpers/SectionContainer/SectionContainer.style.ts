import styled from "styled-components";

type ContainerProps = {
    backgroundColor: string;
};

export const Container = styled.div<ContainerProps>`
    background: ${({ backgroundColor }) => backgroundColor};
    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1520px) {
        padding: 24px 120px 60px 120px;
    }

    @media screen and (max-width: 1300px) {
        padding: 24px 80px 60px 80px;
    }

    @media screen and (max-width: 1080px) {
        padding: 24px 60px 60px 60px;
    }

    @media screen and (max-width: 720px) {
        padding: 24px 40px 60px 40px;
    }

    @media screen and (max-width: 480px) {
        padding: 24px 24px 60px 24px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 1200px;

    @media screen and (max-width: 1520px) {
        width: 100%;
    }
`;
