import styled from "styled-components";

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
