import styled, { css } from "styled-components";

import mainBackgroudn from "../../assets/mainBackground.png";

export const Container = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    position: relative;
    background: url(${mainBackgroudn});
    background-size: cover;
`;

type ContentProps = {
    user?: boolean;
};

export const Content = styled.div<ContentProps>`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: ${({ user }) => (user ? "calc(100vw - 80px)" : "100vw")};
    min-height: calc(100vh - 82px);
`;

export const NarrowSection = styled.div`
    @media screen and (max-width: 1440px) {
        padding: 0 24px 60px 24px;
    }

    @media screen and (max-width: 520px) {
        padding: 0 12px 32px 12px;
    }
`;
