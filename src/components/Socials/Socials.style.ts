import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 1rem;
`;

type IconContanierProps = {
    iconSize: string;
    iconColor: string;
};

export const IconContanier = styled.div<IconContanierProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        height: ${({ iconSize }) => iconSize};
    }

    :hover {
        cursor: pointer;
    }
`;
