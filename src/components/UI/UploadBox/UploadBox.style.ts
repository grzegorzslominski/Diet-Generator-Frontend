import styled, { css } from "styled-components";

type ContainerProps = {
    url?: string;
    error?: string;
};

export const Container = styled.div`
    position: relative;
    display: flex;
    max-width: 100%;
    height: 100%;
`;

export const ImageContainer = styled.div<ContainerProps>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 15px;

    &:hover {
        cursor: ${({ url }) => (!url ? "pointer" : "default")};
    }

    ${({ url, theme }) =>
        url
            ? css`
                  background-image: url(${url});
                  background-size: cover;
                  background-position: center;
                  background-repeat: no-repeat;
              `
            : css`
                border: 1px dashed ${theme.colors.mainBlack}};
            `}
`;

export const Close = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    transform: rotate(45deg);
    right: 15px;
    top: 15px;
    width: 25px;
    height: 25px;
    border: 1px solid #ffffff;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.secondary};

    &:hover {
        cursor: pointer;
    }
`;

export const ErrorContainer = styled.div`
    max-width: 80%;
    display: flex;
    position: absolute;
    bottom: -40px;
    left: 0;

    span {
        white-space: break-spaces;
    }
`;
