import styled, { css } from "styled-components";
import { mainTheme } from "../../../../../../../themes/mainTheme";

export const Container = styled.div`
    background: ${({ theme }) => theme.gradients.horizontalMealGradient};
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    min-height: 120px;
`;

export const Content = styled.div`
    display: grid;
    max-width: 100%;
    grid-template-columns: auto 1.5fr 0.5fr 1fr 0.25fr;

    padding: 12px 12px;
    gap: 32px;
    img {
        height: 115px;
        max-height: 115px;
        width: auto;
        border-radius: 10px;
        object-fit: cover;
        object-position: center;
    }
    @media screen and (max-width: 1220px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const SecondItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100px;
`;

export const LabelsContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 870px) {
        align-items: center;
    }
`;

export const SecondItemsContent = styled.div`
    display: flex;
    gap: 1rem;

    @media screen and (max-width: 870px) {
        gap: 5px;
    }
`;
export const ThirdAndForthContent = styled.div`
    display: flex;
    gap: 10px;

    @media screen and (max-width: 870px) {
        margin-top: 10px;
        gap: 0;
        flex-direction: row-reverse;
        width: 100%;
        justify-content: space-evenly;
    }
`;
export const SecondSingleItem = styled.div`
    background: #ffffff;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.25);
    width: 55px;
    height: 55px;
    padding: 8px 0 0 0;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

type NutrionBoxFooterProps = {
    barColor: string;
};

export const NutrionBoxFooter = styled.div<NutrionBoxFooterProps>`
    align-items: flex-end;
    background: ${({ barColor }) => barColor};
    border-radius: 0 0 10px 10px;
    width: 100%;
    height: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export const ThirdItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 100px;
`;

export const ThirdItemUl = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    margin-left: -20px;
`;
export const ThirdItemLi = styled.li`
    color: white;
`;

export const FourthContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
    justify-content: space-between;

    @media screen and (max-width: 870px) {
        margin-top: -10px;
        flex-direction: row;
        height: 50px;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
    }
`;

type FourthContainerItem = {
    isReloading: boolean;
};

export const ActionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > span {
        :hover {
            cursor: pointer;
        }
    }
`;

export const FourthContainerItem = styled.div<FourthContainerItem>`
    display: flex;
    gap: 10px;

    svg {
        transition: all 1s;
        width: 22px;
        max-width: 22px;
        height: auto;
        fill: ${mainTheme.colors.secondaryColor};
        path {
            fill: ${mainTheme.colors.secondaryColor};
        }

        :hover {
            cursor: pointer;
            transform: scale(1.05);
        }
    }

    ${({ isReloading }) =>
        isReloading &&
        css`
            & > svg:first-child {
                animation: spinnerAnim 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
            }
        `}

    @keyframes spinnerAnim {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
