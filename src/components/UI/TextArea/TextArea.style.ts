import styled, { css } from 'styled-components';

type AreaContainerProps = {
  height?: string;
  error?: string;
};

export const AreaContainer = styled.div<AreaContainerProps>`
    height: ${({ height }) => height};
    width: 100%;
    padding: ${({ error }) => (!error ? '0px' : '0px')};

    &:focus {
        padding: 0px;
    }
`;

type RowProps = {
  labelIndent: boolean;
};

export const Row = styled.div<RowProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;

    ${({ labelIndent }) =>
  labelIndent &&
  css`
            & > span {
                padding-left: 20px;
            }
        `}
`;

export const StyledInput = styled.textarea<AreaContainerProps>`
    all: unset;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    background: #FFFFFF;
    border: solid #d9d9d9 1px;
    text-align: left;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    padding: 16px 24px;
    font-size: 14px;
    line-height: 20px;
    color: #747474;
    border-radius: 5px;
    word-break: break-all;

    ::placeholder {
        font-size: 13px;
        color: ${({ error }) => (error ? '#FF0000' : '#747474')};
        font-weight: ${({ error }) => (error ? 600 : 700)};
    }

    :-ms-input-placeholder {
        font-size: 13px;
        color: ${({ error }) => (error ? '#FF0000' : '#747474')};
        font-weight: ${({ error }) => (error ? 600 : 700)};
    }

    ::-ms-input-placeholder {
        font-size: 13px;
        color: ${({ error }) => (error ? '#FF0000' : '#747474')};
        font-weight: ${({ error }) => (error ? 600 : 700)};
    }
`;

type ContainerProps = {
  width: string;
  error?: string;
};

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    position: relative;
    width: ${({ width }) => width};
    height: 100%;
    border: ${({ error }) => (error ? 'solid 1px #FF0000' : 'none')};

    @media only screen and (max-width: 1000px) {
        width: 100%;
    }
`;

export const ErrorContainer = styled.div`
    display: flex;
    position: absolute;
    bottom: -24px;
    left: 0;
`;

export const LimitContainer = styled.div`
    display: flex;
    position: absolute;
    bottom: -28px;
    right: 0;
`;