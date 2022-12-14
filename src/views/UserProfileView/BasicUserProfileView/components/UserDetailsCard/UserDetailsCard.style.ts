import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 400px;
`;

export const AvatarContanier = styled.div`
    width: 100%;
    padding-bottom: 12px;
    img {
        border-radius: 15px;
        width: 100%;
    }
`;

export const CardName = styled.div`
    display: flex;
    align-items: center;
    //gap: 24px;
    justify-content: space-between;
    padding-bottom: 12px;
    padding-right: 12px;

    svg {
        width: 16px;
        height: auto;
        cursor: pointer;
    }
`;

export const DataContanier = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    row-gap: 2rem;
`;

export const BodyDetails = styled.div`
    display: flex;
    gap: 15px;
`;

export const ExtraDetailsContainer = styled.div`
    display: flex;
    gap: 32px;
    padding-top: 12px;
`;

export const ExtraDetail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`;
