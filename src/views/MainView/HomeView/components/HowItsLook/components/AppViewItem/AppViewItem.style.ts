import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    position: relative;
    width: 100%;
`;

export const View = styled.div`
    img {
        border-radius: 20px;
        width: 600px;
        height: auto;

        @media screen and (max-width: 1440px) {
            width: 500px;
        }

        @media screen and (max-width: 960px) {
            width: 450px;
        }

        @media screen and (max-width: 520px) {
            width: 325px;
        }
    }
`;

export const Description = styled.div`
    display: flex;
    width: 100%;
    height: 75px;
`;
