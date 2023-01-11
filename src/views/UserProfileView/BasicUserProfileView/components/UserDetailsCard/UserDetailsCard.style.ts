import styled, { css } from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
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
    & > img {
        border-radius: 15px;
        width: 100%;
        height: 239px;
        max-height: 239px;
        object-fit: contain;
        object-position: center;
        ${({ profileIMG, theme }) =>
            !profileIMG &&
            css`
                border: 2px dashed ${theme.colors.mainBlack}};
            `}
    }

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

    @media screen and (max-width: 820px) {
        & > img {
            height: auto;
            max-height: 185px;
        }
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
    column-gap: 32px;
    row-gap: 28px;
    padding-top: 16px;
`;

export const BodyDetails = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 82px);
    gap: 15px;
    grid-column: 1 / 3;
`;

export const ExtraDetailsContainer = styled.div`
    display: flex;
    gap: 24px;
    padding-top: 25px;

    @media screen and (max-width: 1220px) and (min-width: 821px) {
        padding-top: 0;
        width: 100%;
        gap: 38px;
    }
`;

export const ExtraDetail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
`;
