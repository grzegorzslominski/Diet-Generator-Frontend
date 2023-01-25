import styled, { css } from "styled-components";
import { mainTheme } from "../../themes/mainTheme";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 24px;
`;

export const InputRow = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, auto);
    column-gap: 30px;
    row-gap: 20px;
`;

export const ProductsContainer = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    border-radius: 5px;
    min-height: 265px;
`;

export const ProductsList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 100px);
    width: 100%;
    gap: 20px;
    position: relative;

    @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(3, 95px);
        gap: 20px 12px;
    }
`;

type ProductItemProps = {
    selected: boolean;
};

export const ProductItem = styled.div<ProductItemProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border: 1px solid ${mainTheme.colors.secondaryColor};
    border-radius: 3px;
    min-height: 50px;

    cursor: pointer;

    ${({ selected }) =>
        selected &&
        css`
            background-color: rgb(37, 150, 190, 0.15);
        `}
`;

export const SearchContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const EmptyContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
