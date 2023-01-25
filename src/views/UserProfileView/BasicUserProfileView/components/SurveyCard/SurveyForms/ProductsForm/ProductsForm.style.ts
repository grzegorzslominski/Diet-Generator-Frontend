import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    gap: 24px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
`;

export const ProductRatingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
`;

export const ProductRatingItem = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
    height: 150px;
    width: 580px;

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
        object-position: center;
        border-radius: 5px;
    }
`;

export const ProductRating = styled.div`
    padding: 0 12px;
    display: flex;
    flex-direction: column;

    gap: 36px;
`;
