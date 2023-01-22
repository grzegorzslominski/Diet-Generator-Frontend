import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px;
    gap: 48px;
`;

export const TopSection = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 300px 1fr 1fr;
    height: 200px;
    gap: 42px;
`;

export const RecipeImageWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export const TopInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 320px;
`;

export const InputsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
`;

export const InputContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const RecipeTypesTable = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

type RecipeTypeItemProps = {
    checked: boolean;
};

export const RecipeTypeItem = styled.div<RecipeTypeItemProps>`
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    justify-content: center;

    :hover {
        cursor: pointer;
    }

    svg {
        width: 20px;
        max-width: 20px;
        height: auto;
        fill: ${({ theme, checked }) => (checked ? theme.colors.green : theme.colors.error)};
    }
`;

export const InputRow = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, auto);
    column-gap: 30px;
    row-gap: 20px;
`;

export const MidSection = styled.div`
    position: relative;
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    column-gap: 48px;

    & > span:last-child {
        position: absolute;
        left: 0;
        bottom: -20px;
    }
`;

export const IngredientsContanier = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 44px;
    gap: 42px;
`;

type IngredientsListProps = {
    emptyList: boolean;
};

export const IngredientsList = styled.div<IngredientsListProps>`
    display: flex;
    flex-direction: column;
    gap: 12px;
    ${({ emptyList }) =>
        emptyList &&
        css`
            justify-content: center;
            align-items: center;
        `}
    height: 100%;
`;

export const IngredientsItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const IngredientItem = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    gap: 12px;
    border: solid 1px rgb(37, 150, 190, 0.5);
    padding: 6px;
    border-radius: 5px;

    & > span:first-child {
        flex-grow: 1;
    }
`;

export const EmptyContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ActionContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 42px;
    width: 100%;
`;
