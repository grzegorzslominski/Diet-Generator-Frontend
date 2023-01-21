import { useState } from "react";
import { withTheme } from "styled-components";

import { mainTheme } from "../../../themes/mainTheme";

import Label from "../Label/Label";

import * as S from "./TextArea.style";

type TextAreaProps = {
    theme: any;
    width: string;
    placeholder?: string;
    height?: string;
    value: any;
    label?: string;
    required?: boolean;
    onChange: (e: any) => void;
    clearError?: () => void;
    limit?: number;
    labelIndent?: boolean;
    error?: string;
    size?: "small" | "normal";
};

const TextArea = ({
    theme,
    width = "100%",
    placeholder,
    height = "100px",
    value,
    label,
    required,
    clearError,
    labelIndent = false,
    onChange,
    limit,
    error,
    size = "normal",
}: TextAreaProps) => {
    return (
        <S.Container width={width}>
            {label && (
                <S.Row labelIndent={labelIndent}>
                    <Label
                        fontWeight='700'
                        fontSize={size === "normal" ? "14px" : "12px"}
                        color={mainTheme.colors.mainBlack}
                    >
                        {label}
                    </Label>
                </S.Row>
            )}
            <S.AreaContainer height={height}>
                <S.StyledInput
                    placeholder={placeholder}
                    value={value}
                    size={size}
                    maxLength={limit ? limit : undefined}
                    onChange={(e) => onChange(e)}
                />
            </S.AreaContainer>
            {limit && value && (
                <S.LimitContainer>
                    <Label fontWeight='400' fontSize='11px'>
                        Available chars: {value.length + "/" + limit}
                    </Label>
                </S.LimitContainer>
            )}
            <S.ErrorContainer>
                <Label fontSize='12px' lineHeight='25px' color='#FF0000'>
                    {error}
                </Label>
            </S.ErrorContainer>
        </S.Container>
    );
};

export default withTheme(TextArea);
