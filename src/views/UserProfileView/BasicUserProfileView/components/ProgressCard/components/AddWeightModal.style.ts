import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 36px;
`;

export const NewWeightRecordContainer = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 36px;

    & > div:last-child {
        height: 30px;
    }
`;

export const DataInputsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 36px;
`;

type WeightRecordsContainer = {
    weightHistory: boolean;
};

export const WeightRecordsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const WeightRecordsContent = styled.div<WeightRecordsContainer>`
    display: flex;
    flex-direction: column;
    ${({ weightHistory, theme }) =>
        weightHistory &&
        css`
            border-top: 1px solid ${theme.colors.secondary};
            border-left: 1px solid ${theme.colors.secondary};
        `}
`;

type WeightRecordProps = {
    isLoading: boolean;
};

export const WeightRecord = styled.div<WeightRecordProps>`
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
    border-right: 1px solid ${({ theme }) => theme.colors.secondary};
    padding: ${({ isLoading }) => (isLoading ? "6px 24px 6px 12px" : "6px 12px")};
`;

export const WeightRecordContent = styled.div`
    display: grid;
    grid-template-columns: 25px 120px auto;
`;

export const ActionContainer = styled.div`
    position: relative;
    padding: 4px;

    & > svg {
        height: 15px;
        width: auto;
        fill: red;
        * {
            stroke-width: 3px;
        }

        &:hover {
            cursor: pointer;
        }
    }
`;

export const EmptyContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
