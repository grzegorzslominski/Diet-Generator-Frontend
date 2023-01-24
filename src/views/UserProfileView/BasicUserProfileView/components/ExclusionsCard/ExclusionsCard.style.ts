import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 18px;
    min-height: 82px;
    max-height: 82px;
    justify-content: space-between;

    @media screen and (max-width: 1220px) and (min-width: 821px) {
        min-height: 106px;
        max-height: 106px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 352px;
    height: 42px;
    justify-content: space-between;

    @media screen and (max-width: 1220px) and (min-width: 821px) {
        width: 232px;
        gap: 8px;
    }

    @media screen and (max-width: 821px) {
        width: 272px;
    }
`;

export const ExclusionDetail = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 1220px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
    }
`;
