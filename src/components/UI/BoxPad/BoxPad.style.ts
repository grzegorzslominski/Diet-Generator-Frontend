import styled from "styled-components";

type ContanierProps = {
    padding: string;
    backgroundColor: string;
};

export const Contanier = styled.div<ContanierProps>`
    padding: ${({ padding }) => padding};
    background-color: ${({ backgroundColor }) => backgroundColor};
    box-shadow: 6px 6px 25px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;
