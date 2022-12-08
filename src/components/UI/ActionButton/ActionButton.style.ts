import styled, { css } from "styled-components";
import { mainTheme } from "../../../themes/mainTheme";

type ContainerProps = {
    sizeType: "normal" | "small";
    size: string;
};

export const Container = styled.div<ContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    ${({ sizeType }) =>
        sizeType === "normal"
            ? css`
                  width: 30px;
                  height: 30px;
                  min-width: 30px;
                  min-height: 30px;
              `
            : css`
                  width: 23px;
                  height: 23px;
                  min-width: 23px;
                  min-height: 23px;
              `}

    border-radius: 50%;
    border: 2px solid ${mainTheme.colors.mainBlack};
    padding: 0 0 1px 1px;

    img {
        height: ${({ size }) => size};
        width: auto;
    }
`;

export const Checkmark = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;

    &:after {
        content: "";
        position: absolute;
        width: 6px;
        height: 10px;
        left: 7.5px;
        top: 4px;
        transform: translate(-50%, -50%);
        border: solid #3cd474;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`;
