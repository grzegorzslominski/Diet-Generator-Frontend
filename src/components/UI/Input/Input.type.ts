import { Moment } from "moment";
import React from "react";

export type InputContainerProps = {
    width: string;
    labelIndent?: boolean;
    label?: string | React.ReactElement;
    disabled?: boolean;
    type?: string;
    icon: boolean;
    size: "small" | "normal";
    showErrorMessage?: boolean;
    error?: string;
};

export type InputProps = {
    error?: string;
    width?: string;
    label?: string | React.ReactElement;
    type?: string;
    maxLength?: number;
    disabled?: boolean;
    disabledDate?: Moment;
    allDatesRange?: boolean;
    min?: number;
    max?: number;
    regexMessage?: string;
    placeholder?: string;
    labelIndent?: boolean;
    required?: boolean;
    regex?: RegExp;
    value: any;
    icon?: React.ReactNode;
    showErrorMessage?: boolean;
    clearError?: () => void;
    id?: string;
    onKeyDown?: (e: any) => void;
    onChange?: (e: any) => void;
    onBlur?: (e: any | Moment | null) => void;
    size?: "small" | "normal";
};
