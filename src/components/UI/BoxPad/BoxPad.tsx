import Label from "../Label/Label";
import { mainTheme } from "../../../themes/mainTheme";

import GradientLabel from "../GradientLabel/GradientLabel";

import * as S from "./BoxPad.style";

export type ClassNameProp = {
    className?: string;
};

type BoxPadType = ClassNameProp & {
    children: React.ReactNode;
    padding?: string;
    gap?: string;
    backgroundColor?: string;
    header?: string;
    gradientHeader?: boolean;
    width?: string;
};

const BoxPad = ({
    children,
    padding = "24px",
    gap = "12px",
    backgroundColor = "#ffffff",
    header,
    gradientHeader = false,
    width = "fit-content",
    className = "",
}: BoxPadType) => {
    return (
        <S.Contanier
            padding={padding}
            backgroundColor={backgroundColor}
            gap={gap}
            width={width}
            className={className ? className : ""}
        >
            {header && gradientHeader ? (
                <GradientLabel>
                    <Label fontSize='16px' fontWeight='600' color={mainTheme.colors.mainBlack}>
                        {header}
                    </Label>
                </GradientLabel>
            ) : (
                header && (
                    <Label fontSize='16px' fontWeight='600' color={mainTheme.colors.mainBlack}>
                        {header}
                    </Label>
                )
            )}
            {children}
        </S.Contanier>
    );
};

export default BoxPad;
