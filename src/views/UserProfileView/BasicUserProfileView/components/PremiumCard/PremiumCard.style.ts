import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 572px;
    min-height: 81px;
    justify-content: space-between;
    gap: 2px;

    @media screen and (max-width: 1600px) and (min-width: 1281px) {
        width: 672px;
        gap: 8px;
    }

    @media screen and (max-width: 1220px) and (min-width: 821px) {
        width: 352px;
        gap: 12px;
    }

    @media screen and (max-width: 820px) {
        width: 272px;
        gap: 18px;
    }
`;

export const RemainingStatusContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    @media screen and (max-width: 820px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 0;
        & > span:first-child {
            font-size: 13px;
        }
    }
`;

export const ActionContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;

    @media screen and (max-width: 1600px) and (min-width: 1221px) {
        padding-top: 12px;
    }

    @media screen and (max-width: 820px) {
        padding-top: 12px;
    }
`;
