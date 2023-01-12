import styled, { css } from "styled-components";

import mainBackgroudn from "../../assets/mainBackground.png";

export const Container = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    min-height: 100vh;
    width: 100vw;
    position: relative;
    background: url(${mainBackgroudn});
    background-size: cover;
`;

type ContentProps = {
    dashboard: boolean;
    verticalMenuIsOpen: boolean;
};

export const ContentWrapper = styled.div`
    display: flex;
    width: 100%;
`;

export const Content = styled.div<ContentProps>`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: calc(100vh - 82px);
    z-index: 1;
    transition: all 0.5s;

    @media screen and (max-width: 860px) {
        width: ${({ dashboard }) => (dashboard ? "calc(100vw - 50px)" : "100vw")};
    }

    @media screen and (max-width: 561px) {
        width: 100vw;
        ${({ dashboard, verticalMenuIsOpen }) =>
            dashboard &&
            verticalMenuIsOpen &&
            css`
                width: calc(100vw - 40px);
                padding: 0 12px;
            `}
    }
`;

export const NarrowSection = styled.div`
    @media screen and (max-width: 1440px) {
        padding: 0 24px 60px 24px;
    }

    @media screen and (max-width: 520px) {
        padding: 0 12px 32px 12px;
    }
`;
