import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 6px;

    :hover {
        cursor: pointer;
    }
`;

type PointItemProps = {
    checked: boolean;
};

export const PointItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
`;

export const PointItem = styled.div<PointItemProps>`
    width: 18px;
    height: 18px;
    position: relative;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 50%;

    ${({ checked, theme }) =>
        checked &&
        css`
            ::after {
                content: "";
                width: 10px;
                height: 10px;
                border-radius: 50%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: ${theme.colors.secondaryColor};
            }
        `}
`;
