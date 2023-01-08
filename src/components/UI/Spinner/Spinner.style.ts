import styled from "styled-components";
import { mainTheme } from "../../../themes/mainTheme";

export const Container = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
`;

type RingProps = {
    size?: "small" | "medium" | "big";
    color: "primary" | "secondary";
};

export const Ring = styled.div<RingProps>`
    display: inline-block;
    position: relative;
    width: ${({ size }) => (size === "small" ? "35px" : size === "medium" ? "45px" : "75px")};
    height: ${({ size }) => (size === "small" ? "35px" : size === "medium" ? "45px" : "75px")};

    & div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: ${({ size }) => (size === "small" ? "22px" : size === "medium" ? "32px" : "62px")};
        height: ${({ size }) => (size === "small" ? "22px" : size === "medium" ? "32px" : "62px")};
        margin: 8px;
        border: 4px solid #fff;
        border-radius: 50%;
        animation: spinnerAnim 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${({ color }) =>
                color === "primary" ? "#fff" : `${mainTheme.colors.secondaryColor}`}
            transparent transparent transparent;
    }

    & div:nth-child(1) {
        animation-delay: -0.45s;
    }
    & div:nth-child(2) {
        animation-delay: -0.3s;
    }
    & div:nth-child(3) {
        animation-delay: -0.15s;
    }

    @keyframes spinnerAnim {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
