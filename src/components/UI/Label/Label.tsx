import styled, { css } from "styled-components";

import { StyledLabelProps, LabelProps } from "./Label.type";

const GradientCSS = css`
    background-image: linear-gradient(
        90deg,
        #ff893c 0%,
        #d57680 14%,
        #aa64bb 32%,
        #8b65dc 49%,
        #6d7cf1 66%,
        #4abcfb 82%,
        #3ef7ef 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: progress-gradient 0.3s ease-in-out;
`;

const StyledLabel = styled.span<StyledLabelProps>`
    font-family: ${({ fontFamily }) =>
        fontFamily === "Poppins" ? "'Poppins', sans-serif" : "'Montserrat', sans-serif"};
    font-size: ${({ fontSize }) => fontSize};
    font-weight: ${({ fontWeight }) => fontWeight};
    text-shadow: ${({ textShadow }) => textShadow};
    line-height: ${({ lineHeight }) => lineHeight};
    color: ${({ theme, color, error }) => (error ? "#FF3A3A" : color)};
    letter-spacing: ${({ letterSpacing }) => letterSpacing};
    width: ${({ width }) => width};
    white-space: ${({ whiteSpace }) => whiteSpace};
    text-align: ${({ textAlign }) => textAlign};
    text-decoration: ${({ textDecoration }) => (textDecoration ? textDecoration : "none")};
    transition: color 0.15s ease-in-out;

    &:hover {
        cursor: ${({ disabled, link, onClick }) =>
            (link || onClick) && !disabled ? "pointer" : disabled ? "default" : "inherit"};
        color: ${({ error, color, hoverColor }) =>
            error ? "#FF3A3A" : hoverColor ? hoverColor : color};
        text-decoration: ${({ link }) => (link ? "underline" : "none")};

        ${({ hoverColor }) => hoverColor === "gradient" && GradientCSS}
    }

    @keyframes progress-gradient {
        from {
            background-position: 25px 0;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        to {
            background-position: 0px 0;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
`;

const Label = ({
    fontFamily,
    fontSize,
    lineHeight,
    textDecoration,
    textAlign = "left",
    textShadow,
    onClick,
    width,
    hoverColor,
    link,
    letterSpacing = "normal",
    children,
    whiteSpace = "normal",
    fontWeight = "400",
    color = "#737380",
    error,
    disabled = false,
}: LabelProps) => {
    return (
        <StyledLabel
            onClick={onClick}
            width={width}
            textAlign={textAlign}
            textDecoration={textDecoration}
            whiteSpace={whiteSpace}
            link={link}
            hoverColor={hoverColor}
            fontFamily={fontFamily}
            fontSize={fontSize}
            fontWeight={fontWeight}
            textShadow={textShadow}
            lineHeight={lineHeight}
            color={color}
            error={error}
            disabled={disabled}
            letterSpacing={letterSpacing}
        >
            {children}
        </StyledLabel>
    );
};

export default Label;
