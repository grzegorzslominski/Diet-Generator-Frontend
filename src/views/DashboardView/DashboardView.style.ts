import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 80px;
    width: 1500px;

    @media screen and (max-width: 1680px) {
        width: 880px;
    }

    @media screen and (max-width: 1120px) {
        width: 575px;
    }

    @media screen and (max-width: 760px) {
        width: 275px;
    }
`;

export const TopSection = styled.div`
    display: grid;
    grid-template-columns: 800px 660px;
    gap: 40px;

    @media screen and (max-width: 1680px) {
        grid-template-columns: 460px 380px;
    }

    @media screen and (max-width: 1120px) {
        grid-template-columns: 100%;
    }
`;

export const ArticleSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
