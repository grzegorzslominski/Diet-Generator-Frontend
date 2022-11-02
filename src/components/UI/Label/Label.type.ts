import React from 'react';

export type StyledLabelProps = {
    fontFamily?: string;
    fontSize?: string;
    fontWeight?: string;
    textShadow?: string;
    lineHeight?: string;
    letterSpacing?: string;
    color?: string;
    hoverColor?: string | 'gradient';
    whiteSpace?: string;
    error?: string;
    width?: string;
    textAlign?: string;
    textDecoration?: string;
    link?: boolean;
    disabled?: boolean;
};

export type LabelProps = {
    fontFamily?: string;
    fontSize?: string;
    lineHeight?: string;
    textDecoration?: string;
    textAlign?: string;
    textShadow?: string;
    hoverColor?: string;
    onClick?: () => void;
    width?: string;
    link?: boolean;
    whiteSpace?: string;
    letterSpacing?: string;
    children: React.ReactElement | string | React.ReactNode | React.ReactNode[];
    fontWeight?: string;
    color?: string;
    error?: string;
    disabled?: boolean;
};
