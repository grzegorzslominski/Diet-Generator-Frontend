import styled, { css } from "styled-components";

import noPhoto from "../../assets/no-photo.png";

export const Wrapper = styled.div`
    padding-top: 60px;
`;

export const Container = styled.div`
    position: relative;
    width: 270px;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.gradients.mealGradient};
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 20px;
    gap: 12px;
`;

export const TopSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 12px 0 0 8px;

    & > div:first-child {
        border-color: ${({ theme }) => theme.colors.checked};
        * {
            color: ${({ theme }) => theme.colors.checked};
        }
    }

    & > svg {
        width: 22px;
        height: auto;
    }
`;

type MealImageProps = {
    image?: string;
};

export const MealImage = styled.div<MealImageProps>`
    height: 125px;
    width: 125px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.checked};
    position: absolute;
    left: 50%;
    top: -75px;
    transform: translateX(-50%);
    background-image: url(${({ image }) => (image ? image : noPhoto)});
    background-size: cover;
    background-position: center;
`;

type RateBoxProps = {
    rate: boolean;
};

export const RateBox = styled.div<RateBoxProps>`
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${({ rate }) =>
        rate &&
        css`
            border: solid ${({ theme }) => theme.colors.checked} 2px;
            border-radius: 8px;
        `}
`;

type MiddleSectionProps = {
    version: "basic" | "author";
};

export const MiddleSection = styled.div<MiddleSectionProps>`
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: 150px;
    & > span:first-child {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 40px;
    }
`;

export const BasicIngredients = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: hidden;
`;

export const IngredientsList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 30px;
    margin: 0;
    padding: 0 0 0 20px;

    & > li {
        text-overflow: ellipsis;

        ::marker {
            font-size: 12px;
            color: white;
        }
    }
`;

export const TextContent = styled.div`
    display: flex;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 220px;
    max-height: 105px;
`;

export const BottomSection = styled.div`
    display: flex;
    padding-top: 6px;
    flex-direction: row;
    justify-content: space-between;
`;

export const NutrionItem = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const NutrionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;

    & > div:first-child {
        padding-bottom: 2px;
    }
`;

export const ActionButton = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const AuthorBox = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 270px;
    padding: 42px 24px 16px 24px;
    border-radius: 10px;
    margin-top: -24px;

    img {
        width: 65px;
        height: 65px;
        object-fit: cover;
        object-position: center;
        border-radius: 50%;
    }
`;

export const AuthorName = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 115px;
`;
