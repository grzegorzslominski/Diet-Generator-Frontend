import React, { useState } from 'react';
import { withTheme } from 'styled-components';

import Label from '../Label/Label';

import * as S from './TextArea.style';
import { mainTheme } from "../../../themes/mainTheme";

type TextAreaProps = {
  theme: any;
  width: string;
  placeholder?: string;
  height?: string;
  value: any;
  label?: string;
  required?: boolean;
  subLabel?: string;
  onChange: (e: any) => void;
  clearError?: () => void;
  limit?: number;
  labelIndent?: boolean;
  error?: string;
};

const TextArea = ({
                    theme,
                    width = '100%',
                    placeholder,
                    height = '100px',
                    value,
                    label,
                    required,
                    subLabel,
                    clearError,
                    labelIndent = false,
                    onChange,
                    limit,
                    error,
                  }: TextAreaProps) => {
  const [internalValidationError, setInternalValidationError] = useState('');

  const validationInputHandler = (e: any) => {
    if (error && clearError) {
      clearError();
    }

    if (internalValidationError) {
      setInternalValidationError('');
    }

    if (onChange) onChange(e);
  };

  const validationBlurHandler = (e: any) => {
    if (internalValidationError) setInternalValidationError('');

    if (required && !value) {
      setInternalValidationError('This field is required.');
    }
  };

  return (
    <S.Container width={width} error={error || internalValidationError}>
      {label && (
        <S.Row labelIndent={labelIndent}>
          <Label
            error={internalValidationError || error}
            fontWeight="700"
            fontSize="14px"
            color={mainTheme.colors.mainBlack}
          >
            {label}
          </Label>
          {/* {subLabel && (
                        <Label
                            fontWeight="400"
                            fontSize="16px"
                            color={theme.colors.secondaryColor}
                            lineHeight="25px">
                            {subLabel}
                        </Label>
                    )} */}
        </S.Row>
      )}
      <S.AreaContainer height={height}>
        <S.StyledInput
          placeholder={placeholder}
          value={value}
          onBlur={validationBlurHandler}
          onChange={validationInputHandler}
          maxLength={limit ? limit : undefined}
          error={error}
        />
      </S.AreaContainer>
      {limit && value && (
        <S.LimitContainer>
          <Label fontWeight="400" fontSize="12px">
            Available chars: {value.length + '/' + limit}
          </Label>
        </S.LimitContainer>
      )}
      {(internalValidationError || error) && (
        <S.ErrorContainer>
          <Label fontSize="12px" lineHeight="25px" color="#FF0000">
            {internalValidationError || error}
          </Label>
        </S.ErrorContainer>
      )}
    </S.Container>
  );
};

export default withTheme(TextArea);