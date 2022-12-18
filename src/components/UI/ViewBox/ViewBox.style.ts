import styled from "styled-components";

export const Container = styled.div`
    width: calc(100% - 80px);
    max-width: 1720px;
    padding-top: 46px;
    display: flex;
    justify-content: center;
    position: relative;

    @media screen and (max-width: 1720px) {
        width: 100%;
    }

    @media screen and (max-width: 560px) {
        padding-top: 24px;
    }
`;
