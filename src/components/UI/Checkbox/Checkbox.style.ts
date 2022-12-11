import styled from 'styled-components';

import { CheckboxContainerProps, CheckboxProps } from './Checkbox.type';
import checkMark from "../../../assets/icons/checkMark.svg"
type MainContainerProps = {
  maxWidth?: string;
  sizeType: 'medium' | 'small';
};

export const MainContainer = styled.div<MainContainerProps>`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    max-width: ${({ maxWidth }) => maxWidth};

    & > span {
        max-width: ${({ sizeType }) =>
  sizeType === 'medium' ? 'calc(100% - 26px)' : 'calc(100% - 20px)'};
    }
  border: solid white 1px;
  border-radius: 50%;
`;

export const CheckboxContainer = styled.div<CheckboxContainerProps>`
    display: block;
    height: ${({ sizeType }) => (sizeType === 'medium' ? '16px' : '10px')};
    width: ${({ sizeType }) => (sizeType === 'medium' ? '16px' : '10px')};
    position: relative;
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: ${({ error, theme }) => (error ? '2px solid ' + theme.colors.red : 'none')};
    // background-image: linear-gradient(
    //         ${({ theme }) => theme.colors.black},
    //         ${({ theme }) => theme.colors.black}
    //     ),
    //     ${({ theme }) => theme.gradients.mainGradient};
    background-image: ${({ error, theme }) =>
  error
    ? 'none'
    : 'linear-gradient(' +
    theme.colors.black +
    ',' +
    theme.colors.black +
    '),' +
    theme.gradients.mainGradient};
    background-origin: border-box;
    background-clip: content-box, border-box;
    padding: 2px;
    border-radius: ${({ borderRadius }) => borderRadius};

    &:hover {
        cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    }
`;

export const Checkmark = styled.span<CheckboxProps>`
    display: ${({ checked }) => (checked ? 'block' : 'none')};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 50%;
    width: 50%;
    background: white;

    border-radius: ${({ borderRadius }) => borderRadius};

    &:hover {
        cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    }
`;

export const StyledCheckbox = styled.input<CheckboxContainerProps>`
    all: unset;
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    z-index: 1;
    cursor: pointer;
    height: 100%;
    width: 100%;

    &:hover {
        cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    }
`;