import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;

    @media screen and (max-width: 1600px) and (min-width: 1221px) {
        gap: 36px;

        & > span:first-child {
            padding-top: 14px;
        }
    }

    @media screen and (max-width: 1220px) and (min-width: 761px) {
        gap: 20px;
    }
`;

export const ActionContainer = styled.div`
    padding-top: 3px;
    display: flex;
    width: 100%;
    justify-content: flex-end;

    @media screen and (max-width: 1280px) and (min-width: 1221px) {
        & > div {
            width: calc(100% - 8px);
        }
    }
`;
