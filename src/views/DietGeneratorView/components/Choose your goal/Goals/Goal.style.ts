import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
`;

interface GoalItemProps {
    selected: boolean;
}
export const GoalItem = styled.div<GoalItemProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 125px;
    gap: 6px;
    transition: all 0.35s;

    & > svg {
        height: 30px;
        max-height: 30px;
        width: auto;
    }
    border: solid 1px ${({ theme }) => theme.colors.secondaryColor};
    border-radius: 5px;
    padding: 10px 10px 10px 10px;
    cursor: pointer;

    @media screen and (max-width: 1220px) {
        width: 80px;
        height: 80px;
        padding: 6px;

        & > svg {
            height: 25px;
            max-height: 25px;

            width: auto;
        }
    }

    ${({ selected }) =>
        selected
            ? css`
                  background: rgb(37, 150, 190, 0.15);
              `
            : null}
`;
