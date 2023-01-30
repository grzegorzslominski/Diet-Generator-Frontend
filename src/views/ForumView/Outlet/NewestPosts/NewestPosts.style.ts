import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    min-height: 100vh;
    width: 1100px;
    display: grid;
    grid-template-columns: 1fr 250px;
    gap: 48px;

    @media screen and (max-width: 1240px) {
        width: 800px;
        padding: 0 48px;
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 900px) {
        flex-direction: column-reverse;
        align-items: center;
        padding: 0 24px;
        gap: 20px;
    }

    @media screen and (max-width: 480px) {
        padding: 0 12px;
    }
`;

export const Posts = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
