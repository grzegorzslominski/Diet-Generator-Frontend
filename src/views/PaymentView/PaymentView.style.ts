import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
`;

export const PadsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 400px);
    column-gap: 64px;
`;

export const PadContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 36px;
    height: 350px;
    padding: 6px;
`;

type HeaderProps = {
    iconSize?: string;
    gap?: string;
};

export const Header = styled.div<HeaderProps>`
    display: flex;
    gap: ${({ gap }) => (gap ? gap : "24px")};
    width: 100%;
    justify-content: center;

    svg {
        height: ${({ iconSize }) => (iconSize ? iconSize : null)};
        width: auto;
    }
`;

export const AdvantagesListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const AdvantagesList = styled.ul`
    padding-left: 20px;
    margin: 0;
`;

export const CostContanier = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const ActionButton = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const PaymentSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
