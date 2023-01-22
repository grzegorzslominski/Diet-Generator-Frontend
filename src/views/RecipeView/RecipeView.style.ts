import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 1000px;
    min-height: 100%;
    transition: none;
`;

export const TopeSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colors.grey};
`;
