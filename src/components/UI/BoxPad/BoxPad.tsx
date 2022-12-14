import Label from "../Label/Label";
import { mainTheme } from "../../../themes/mainTheme";

import * as S from "./BoxPad.style";

type BoxPadType = {
    children: React.ReactNode;
    padding?: string;
    gap?: string;
    backgroundColor?: string;
    header?: string;
};

const BoxPad = ({
    children,
    padding = "24px",
    gap = "12px",
    backgroundColor = "#ffffff",
    header,
}: BoxPadType) => {
    return (
        <S.Contanier padding={padding} backgroundColor={backgroundColor} gap={gap}>
            {header && (
                <Label fontSize='16px' fontWeight='600' color={mainTheme.colors.mainBlack}>
                    {header}
                </Label>
            )}
            {children}
        </S.Contanier>
    );
};

export default BoxPad;
