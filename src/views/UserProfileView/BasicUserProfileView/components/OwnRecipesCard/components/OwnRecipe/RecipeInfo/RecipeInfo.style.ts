import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    width: 600px;

    @media screen and (max-width: 820px) {
        width: 340px;
    }
`;

export const TopSection = styled.div`
    height: 170px;
    width: 100%;
    display: grid;
    gap: 36px;
    grid-template-columns: 250px 1fr;

    @media screen and (max-width: 820px) {
        grid-template-columns: 1fr;
        height: auto;
    }
`;

type MealPhotoProps = {
    mealPhoto: string;
};

export const MealPhoto = styled.div<MealPhotoProps>`
    width: 100%;
    height: 100%;
    background: url(${({ mealPhoto }) => mealPhoto});
    background-size: cover;
    background-position: center;
    border-radius: 10px;

    @media screen and (max-width: 820px) {
        height: 150px;
        width: 250px;
        justify-self: center;
    }
`;

export const TopSectionInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    gap: 24px;
`;

export const Instrucions = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const Divider = styled.div`
    width: 95%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.grey};
    opacity: 0.75;
    border-radius: 5px;
`;

export const SubHistoryTable = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid ${({ theme }) => theme.colors.mainBlack};
    border-left: 1px solid ${({ theme }) => theme.colors.mainBlack};
`;

export const TableRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 80px 80px;
`;

export const TableRowItem = styled.div`
    padding: 0 12px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.mainBlack};
    border-right: 1px solid ${({ theme }) => theme.colors.mainBlack};
    display: flex;
    align-items: center;
    height: 30px;
`;

export const ActionContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;
