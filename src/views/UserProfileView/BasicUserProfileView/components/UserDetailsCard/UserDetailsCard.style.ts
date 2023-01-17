import styled, { css } from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 12px;
    width: 352px;

    @media screen and (max-width: 1220px) and (min-width: 821px) {
        width: 672px;
        flex-direction: row;
        flex-wrap: wrap;
        column-gap: 50px;
    }

    @media screen and (max-width: 820px) {
        width: 272px;
    }
`;

type TopSectionProps = {
    profileIMG: boolean;
};

export const TopSection = styled.div<TopSectionProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media screen and (max-width: 1220px) and (min-width: 821px) {
        width: 250px;
        min-width: 250px;
        & > img {
            border-radius: 15px;
            width: 100%;
            height: auto;
            max-height: 170px;
        }
    }
`;

export const UserAvatarContainer = styled.div`
    border-radius: 15px;
    width: 100%;
    height: 239px;
    max-height: 239px;

    @media screen and (max-width: 1220px) and (min-width: 821px) {
        width: 100%;
        height: auto;
        max-height: 170px;
    }

    @media screen and (max-width: 820px) {
        height: auto;
        max-height: 185px;
    }
`;

export const CardName = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 8px;

    svg {
        width: 16px;
        height: auto;
        cursor: pointer;
    }

    @media screen and (max-width: 1220px) and (min-width: 821px) {
        padding-bottom: 0;
    }
`;

export const DataContanier = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 60px);
    gap: 6px 32px;
    padding-top: 16px;

    @media screen and (max-width: 1220px) {
        padding-top: 0;
        gap: 6px 48px;
        justify-content: space-between;
        & > * {
            width: 100%;
            height: fit-content;
        }
    }
`;

export const BodyDetails = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 82px);
    gap: 15px;
    grid-column: 1 / 3;
`;

export const BottomSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 16px;
    width: 100%;

    @media screen and (max-width: 1220px) {
        padding-top: 12px;
    }

    @media screen and (max-width: 820px) {
        padding-top: 0;
        flex-direction: column;
        gap: 24px;
        align-items: flex-end;
    }
`;

export const ExtraDetailsContainer = styled.div`
    display: flex;
    gap: 24px;

    @media screen and (max-width: 1220px) and (min-width: 821px) {
        gap: 45px;
    }

    @media screen and (max-width: 1220px) {
        padding-top: 0;
        width: 100%;
    }
`;

export const ExtraDetail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
`;
