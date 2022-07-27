import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
    background: ${({ theme }) => theme.colors.mainBlack};
`;

export const Content = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 1520px;
    min-height: calc(100vh - 61px);
    padding: 0 36px 60px 36px;

    @media screen and (max-width: 1420px) {
        width: 100%;
        padding: 0 36px 60px 36px;
    }

    @media screen and (max-width: 520px) {
        padding: 0 12px;
        padding-bottom: 32px;
    }
`;
