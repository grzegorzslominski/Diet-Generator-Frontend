import Label from "../Label/Label";
import Spinner from "../Spinner/Spinner";
import GradientLabel from "../GradientLabel/GradientLabel";
import { BUTTON_STYLE_PRESET } from "./const/const";

import { ButtonProps } from "./Button.type";

import * as S from "./Button.style";

const Button = ({
    onClick,
    isLoading,
    children,
    icon,
    borderRadius = "6px",
    borderWidth = "2px",
    background,
    fontSize = "14px",
    styleType = "primaryFull",
    size = "medium",
    disabled,
    gradient,
    width = "100%",
    tabIndex,
}: ButtonProps) => {
    return (
        <S.ButtonContainer width={width} size={size} tabIndex={tabIndex}>
            <S.StyledButton
                size={size}
                borderRadius={borderRadius}
                borderWidth={borderWidth}
                background={
                    background ? background : BUTTON_STYLE_PRESET[styleType].backgroundColor
                }
                styleType={styleType}
                gradient={gradient}
                onClick={disabled ? () => {} : onClick}
                disabled={disabled || isLoading}
                width={width}
                isLoading={isLoading}
                color={BUTTON_STYLE_PRESET[styleType].color}
            >
                {!isLoading && !icon && (
                    <>
                        {styleType === "gradientEmpty" ? (
                            <GradientLabel gradient={gradient}>
                                <Label
                                    fontSize={fontSize}
                                    lineHeight='100%'
                                    fontWeight='600'
                                    color={BUTTON_STYLE_PRESET.gradientEmpty.color}
                                    fontFamily='Lato'
                                >
                                    {children}
                                </Label>
                            </GradientLabel>
                        ) : (
                            <Label
                                fontSize={fontSize}
                                fontWeight='500'
                                color={BUTTON_STYLE_PRESET[styleType].color}
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
                                    color={BUTTON_STYLE_PRESET[styleType].color}
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
                    <Spinner
                        color={
                            styleType === "gradientEmpty" || styleType === "primaryEmpty"
                                ? "secondary"
                                : "primary"
                        }
                        size={size === "small" ? "small" : "medium"}
                    />
                </S.SpinnerContainer>
            )}
        </S.ButtonContainer>
    );
};

export default Button;
