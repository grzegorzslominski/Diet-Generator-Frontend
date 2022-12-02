import styled from "styled-components";

export const Contanier = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    align-items: center;
`;

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding-bottom: 2rem;
    width: 100%;
`;

export const RedirectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    & > * {
        cursor: pointer;
    }
`;
