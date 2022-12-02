import Label from "../Label/Label";
import Spinner from "../Spinner/Spinner";
import GradientLabel from "../GradientLabel/GradientLabel";

import { ButtonProps } from "./Button.type";

import * as S from "./Button.style";

const Button = ({
    onClick,
    isLoading,
    children,
    icon,
    borderRadius = "6px",
    borderWidth = "2px",
    background = "transparent",
    fontSize = "14px",
    styleType = "primary",
    size = "medium",
    disabled,
    gradient,
    width = "100%",
}: ButtonProps) => {
    return (
        <S.ButtonContainer width={width} size={size}>
            <S.StyledButton
                size={size}
                borderRadius={borderRadius}
                borderWidth={borderWidth}
                background={background}
                styleType={styleType}
                gradient={gradient}
                onClick={disabled ? () => {} : onClick}
                disabled={disabled || isLoading}
                width={width}
                isLoading={isLoading}
            >
                {!isLoading && !icon && (
                    <>
                        {styleType === "secondary" ? (
                            <GradientLabel gradient={gradient}>
                                <Label
                                    fontSize={fontSize}
                                    lineHeight='100%'
                                    fontWeight='700'
                                    color='#121212'
                                    fontFamily='Lato'
                                >
                                    {children}
                                </Label>
                            </GradientLabel>
                        ) : (
                            <Label
                                fontSize={fontSize}
                                lineHeight='100%'
                                fontWeight='600'
                                color='white'
                                fontFamily='Lato'
                            >
                                {children}
                            </Label>
                        )}
                    </>
                )}
                {!isLoading && icon && (
                    <S.InnerContainer>
                        {icon && (
                            <>
                                <Label
                                    fontSize={fontSize}
                                    lineHeight='100%'
                                    fontWeight='700'
                                    color='#121212'
                                >
                                    {children}
                                </Label>
                                {icon}
                            </>
                        )}
                    </S.InnerContainer>
                )}
            </S.StyledButton>
            {isLoading && (
                <S.SpinnerContainer>
                    <Spinner size={size === "small" ? "small" : "medium"} />
                </S.SpinnerContainer>
            )}
        </S.ButtonContainer>
    );
};

export default Button;
