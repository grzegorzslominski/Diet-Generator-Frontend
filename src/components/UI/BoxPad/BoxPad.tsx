import Label from "../Label/Label";
import { mainTheme } from "../../../themes/mainTheme";

import * as S from "./BoxPad.style";

type BoxPadType = {
    children: React.ReactNode;
    padding?: string;
    backgroundColor?: string;
    header?: string;
};

const BoxPad = ({
    children,
    padding = "24px",
    backgroundColor = "#ffffff",
    header,
}: BoxPadType) => {
    return (
        <S.Contanier padding={padding} backgroundColor={backgroundColor}>
            <Label fontSize='18px' fontWeight='700' color={mainTheme.colors.mainBlack}>
                {header}
            </Label>
            {children}
        </S.Contanier>
    );
};

export default BoxPad;
