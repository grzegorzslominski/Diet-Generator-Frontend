import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 480px;

    @media screen and (max-width: 1200px) {
        width: 330px;
    }
`;

export const ExclusionsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    padding-bottom: 20px;
`;

export const Exclusions = styled.div`
    display: grid;
    gap: 12px 20px;
    width: 100%;
    grid-template-columns: repeat(4, 100px);

    @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(3, 95px);
    }
`;

export const ExclusionItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    height: 40px;
    background: rgb(37, 150, 190, 0.15);
    :hover {
        cursor: pointer;
    }
`;

export const EmptyContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const ActionContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;
