import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    gap: 24px;
`;

export const ChartContainer = styled.div`
    width: 650px;
    min-height: 356px;
    height: 100%;
    display: flex;
    align-items: center;

    & > div {
        width: 100%;
    }
`;

export const ChartSettingsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 42px;
`;

export const ChartSettinges = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    & > span {
        padding-left: 4px;
    }
`;
