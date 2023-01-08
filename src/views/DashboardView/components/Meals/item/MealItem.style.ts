import styled, { css } from "styled-components";

import noPhoto from "../../../../../assets/no-photo.png";

export const Wrapper = styled.div`
    padding-top: 60px;
`;
export const Container = styled.div`
    width: 260px;
    height: 380px;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.gradients.mealGradient};
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 0 20px;
    gap: 12px;
`;

export const TopSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 24px 0 0 8px;

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
    border: 2px solid white;
    position: absolute;
    left: 50%;
    top: -60px;
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
            border: solid white 2px;
            border-radius: 8px;
        `}
`;

type MiddleSectionProps = {
    version: "basic" | "author";
};

export const MiddleSection = styled.div<MiddleSectionProps>`
    display: flex;
    flex-direction: column;
    gap: ${({ version }) => (version ? "24px" : "6")};
`;

export const BasicIngredients = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const IngredientsList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, minmax(45px, 45px));
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
    margin: 10px 10px 10px 10px;
    text-overflow: ellipsis;
    width: 220px;
    overflow: hidden;
    max-height: 110px;
    white-space: nowrap;
`;

export const BottomSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const BottomItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
`;
export const BottomSingleItem = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const Footer = styled.div`
    position: absolute;
    bottom: 10px;
    right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        height: 0.7rem;
        padding-left: 5px;
    }
    cursor: pointer;
    z-index: 1;
`;
