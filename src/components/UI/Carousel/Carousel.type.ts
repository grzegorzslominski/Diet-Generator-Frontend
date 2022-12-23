import React from "react";

export type CarouselProps = {
    children: React.ReactNode[];
    version: "arrows" | "dots";
    gap: number;
    widthElement: number;
    scrollAxie?: "vertical" | "horizontal";
    buttonPosition?: ButtonPositionProps;
    displayOne?: boolean;
    maxChildren?: number;
    arrowsColor?: string;
    responsiveBreakpoints?: {
        fourElement: number;
        threeElement: number;
        twoElement: number;
        oneElement?: number;
    };
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
