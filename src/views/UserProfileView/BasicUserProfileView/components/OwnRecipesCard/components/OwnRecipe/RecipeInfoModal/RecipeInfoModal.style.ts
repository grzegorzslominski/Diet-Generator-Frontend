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

export const TableInfo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: fit-content;
    border-top: 1px solid ${({ theme }) => theme.colors.grey};
    border-left: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const TableCol = styled.div`
    display: flex;
    flex-direction: column;
`;

type ColItemProps = {
    compatibleType?: boolean;
};

export const ColItem = styled.div<ColItemProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
    border-right: 1px solid ${({ theme }) => theme.colors.grey};
    padding: 4px 6px;
    height: 28px;
    span {
        width: 100%;
    }

    svg {
        height: 16px;
        max-height: 16px;
        width: auto;
        fill: ${({ theme, compatibleType }) =>
            compatibleType ? theme.colors.green : theme.colors.error};

        * {
            stroke-width: 5px;
        }
    }
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

export const ActionContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;
