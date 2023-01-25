import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
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
    height: 430px;
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
    min-height: 180px;
    max-height: 180px;
`;

export const AdvantagesList = styled.ul`
    padding-left: 20px;
    margin: 0;
`;

export const CostContanier = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const ActionButton = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const SubscriptionDetails = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    flex-direction: column;
    align-items: center;
`;

export const SubCancelContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const SubscriptionInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const SubscriptionHistory = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const SubHistoryTable = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid ${({ theme }) => theme.colors.mainBlack};
    border-left: 1px solid ${({ theme }) => theme.colors.mainBlack};
`;

export const TableRow = styled.div`
    display: grid;
    grid-template-columns: 50px 1fr 1fr 0.75fr 0.65fr;
`;

export const TableRowItem = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.colors.mainBlack};
    border-right: 1px solid ${({ theme }) => theme.colors.mainBlack};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
`;
