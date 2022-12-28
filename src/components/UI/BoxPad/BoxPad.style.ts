import styled from "styled-components";

type ContanierProps = {
    padding: string;
    backgroundColor: string;
    width: string;
    gap: string;
};

export const Contanier = styled.div<ContanierProps>`
    padding: ${({ padding }) => padding};
    background-color: ${({ backgroundColor }) => backgroundColor};
    box-shadow: 6px 6px 25px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    width: ${({ width }) => width};
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: ${({ gap }) => gap};

    @media screen and (max-width: 821px) {
        gap: 12px;
    }
`;
