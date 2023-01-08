import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 80px;
    width: 1500px;

    @media screen and (max-width: 1600px) {
        width: 1100px;
    }
`;

export const TopSection = styled.div`
    display: grid;
    grid-template-columns: 800px 660px;
    gap: 40px;

    @media screen and (max-width: 1600px) {
        grid-template-columns: 600px 460px;
    }
`;

export const ArticleSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
