import React from "react";

export type CarouselProps = {
    children: React.ReactNode[];
    version: "arrows" | "dots";
    gap: number;
    widthElement: number;
    maxHeight?: string;
    scrollAxie?: "vertical" | "horizontal";
    buttonPosition?: ButtonPositionProps;
    displayOne?: boolean;
    arrowsColor?: string;
};

export type ButtonPositionProps = {
    horizontal?: number;
    vertical?: number;
    leftButton?: {
        horizontal?: number;
        vertical?: number;
    };
    rightButton?: {
        horizontal?: number;
        vertical?: number;
    };
};
