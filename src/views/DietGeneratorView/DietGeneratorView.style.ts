import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 1018px;
    align-items: center;
    gap: 42px;

    @media screen and (max-width: 1220px) {
        width: 520px;
    }

    @media screen and (max-width: 720px) {
        width: 340px;
    }
`;

export const GenerateStep = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    width: 100%;
`;

export const StepContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;

    @media screen and (max-width: 720px) {
        gap: 72px;
    }
`;

export const MealCount = styled.div`
    display: flex;
    align-items: flex-end;

    justify-content: center;
    gap: 24px;

    & > svg {
        width: 80px;
        max-width: 80px;
        height: auto;
    }

    @media screen and (max-width: 1220px) {
        flex-wrap: wrap;
    }
`;

export const Substep = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 100%;
    align-items: center;
`;

export const SettingsContainer = styled.div`
    display: flex;
    gap: 24px;
    width: 100%;
`;

export const SettingItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

type MealCountItemProps = {
    checked: boolean;
};

export const MealCountContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`;

export const MealCountItem = styled.div<MealCountItemProps>`
    border: 1px solid ${({ theme }) => theme.colors.secondaryColor};
    border-radius: 3px;
    height: 50px;
    width: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.35s;

    ${({ theme, checked }) =>
        checked &&
        css`
            background: ${theme.colors.secondaryColor};
            span {
                color: white;
            }
        `};

    :hover {
        cursor: pointer;
    }
`;
