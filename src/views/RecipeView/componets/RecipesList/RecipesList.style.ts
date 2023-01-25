import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    justify-content: center;
`;

export const TopSection = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 24px;
`;

export const ActionContainer = styled.div`
    display: flex;
    gap: 6px;
`;

export const Content = styled.div`
    position: relative;
    min-height: 30px;
    display: flex;
`;

export const RecipesList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 32px;
`;

export const RecipeItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 12px 24px;
    border: solid 1px ${({ theme }) => theme.colors.secondary};
    border-radius: 10px;
`;

export const RecipeContent = styled.div`
    display: grid;
    height: 140px;
    grid-template-columns: 200px 1.75fr 1.5fr;
    gap: 32px;

    img {
        width: 100%;
        height: 140px;
        max-height: 140px;
        border-radius: 8px;
        object-fit: cover;
        object-position: center;
    }
`;

export const RecipeInstrucion = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    position: relative;
`;
