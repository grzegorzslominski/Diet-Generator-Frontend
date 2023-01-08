import styled from "styled-components";

export const Container = styled.div``;

export const PadsContainer = styled.div`
    display: flex;
    gap: 48px;
`;

export const PadContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 36px;
    height: 350px;
`;

type HeaderProps = {
    iconSize?: string;
    gap?: string;
};

export const Header = styled.div<HeaderProps>`
    display: flex;
    gap: ${({ gap }) => (gap ? gap : "24px")};

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
