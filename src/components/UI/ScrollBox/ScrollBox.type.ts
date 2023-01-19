import React from "react";

export type ScrollBoxProps = {
    height: number;
    scrollDistance: number;
    children: React.ReactNode;
    scrollPosition?: "outside" | "inside";
    mobileScrollDistance?: number;
};

export type ContainerProps = {
    scrollDistance: number;
    scrollPosition?: "outside" | "inside";
};

export type ContentProps = {
    height: number;
    scrollDistance: number;
    scrollPosition?: "outside" | "inside";
    hiddenScroll: boolean;
};

export type ScrollProps = {
    height: number;
    hidden: boolean;
    scrollDistance: number;
    scrollPosition?: "outside" | "inside";
};

export type CircleProps = {
    hidden: boolean;
};
