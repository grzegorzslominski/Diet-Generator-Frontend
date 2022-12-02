import React from "react";

export type ButtonContainerProps = {
    width: string;
    size: "extraSmall" | "small" | "medium" | "big";
};

export type ButtonProps = {
    onClick: any;
    styleType: "primary" | "secondary";
    borderRadius?: string;
    borderWidth?: string;
    isLoading?: boolean;
    background?: string;
    size?: "extraSmall" | "small" | "medium" | "big";
    fontSize?: string;
    children: React.ReactNode | string;
    icon?: React.ReactNode;
    disabled?: boolean;
    width?: string;
    gradient?: string;
};