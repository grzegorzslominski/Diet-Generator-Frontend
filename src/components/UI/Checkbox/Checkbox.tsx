import * as S from './Checkbox.style';

import { CheckboxProps } from './Checkbox.type';

const Checkbox = ({
                    checked,
                    disabled,
                    onChange,
                    children,
                    borderRadius = '50%',
                    maxWidth,
                    sizeType = 'medium',
                    error,
                  }: CheckboxProps) => {
  return (
    <S.MainContainer maxWidth={maxWidth} sizeType={sizeType}>
      <S.CheckboxContainer
        sizeType={sizeType}
        disabled={disabled}
        error={error}
        borderRadius={borderRadius}>
        <S.StyledCheckbox
          checked={checked}
          borderRadius={borderRadius}
          sizeType={sizeType}
          disabled={disabled}
          type="checkbox"
          onChange={onChange}
        />
        <S.Checkmark
          borderRadius={borderRadius}
          checked={checked}
          disabled={disabled}
          error={error}
        />
      </S.CheckboxContainer>
      {children}
    </S.MainContainer>
  );
};

export default Checkbox;