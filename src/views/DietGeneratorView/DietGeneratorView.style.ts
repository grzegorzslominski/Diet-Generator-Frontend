import styled from "styled-components";

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
