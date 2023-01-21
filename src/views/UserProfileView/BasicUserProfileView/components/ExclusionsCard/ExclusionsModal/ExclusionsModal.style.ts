import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 800px;
`;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 70px);
    gap: 12px;
`;

export const EmptyContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;
