import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    gap: 20px;

    @media screen and (max-width: 1280px) and (min-width: 1221px) {
        gap: 26px;
    }
`;

export const Meals = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media screen and (max-width: 1600px) and (min-width: 821px) {
        flex-direction: row;
    }
`;

export const EmptyContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    align-items: center;
`;
