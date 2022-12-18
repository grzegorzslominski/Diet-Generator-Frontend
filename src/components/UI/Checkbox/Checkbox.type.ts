import React from 'react';

export type CheckboxContainerProps = {
  disabled?: boolean;
  error?: string;
  borderRadius: string;
  sizeType?: 'small' | 'medium';
};

export type CheckboxProps = {
  checked: boolean;
  maxWidth?: string;
  disabled?: boolean;
  sizeType?: 'small' | 'medium';
  onChange?: (e: any) => void;
  borderRadius?: string;
  children?: React.ReactNode;
  error?: string;
};