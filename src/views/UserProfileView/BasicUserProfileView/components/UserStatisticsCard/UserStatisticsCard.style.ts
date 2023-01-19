import styled from "styled-components";

export const Content = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 24px;
    width: 672px;
    height: 341px;

    @media screen and (max-width: 1280px) and (min-width: 1221px) {
        width: 572px;
    }

    @media screen and (max-width: 820px) {
        width: 272px;
        height: 250px;
    }
`;

export const ChartSettingsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    position: absolute;
    top: -28px;
    right: 10px;
    gap: 12px;

    @media screen and (max-width: 820px) {
        top: 8px;
        left: -4px;
        flex-direction: row;
    }
`;

export const CharSetting = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 24px;

    @media screen and (max-width: 820px) {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 8px;

        & > span:first-child {
            padding-left: 4px;
        }
    }
`;

export const ChartSettingButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    @media screen and (max-width: 820px) {
        justify-content: flex-starts;
    }
`;

export const ChartContainer = styled.div`
    display: flex;
    width: 92.5%;

    & > div {
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 820px) {
        width: 500px;
        transform: scale(0.6);
        position: absolute;
        top: 32px;
    }
`;
