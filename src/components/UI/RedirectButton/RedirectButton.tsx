import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow.svg";
import { mainTheme } from "../../../themes/mainTheme";

import Label from "../Label/Label";

import * as S from "./RedirectButton.style";

type RedirectButtonProps = {
    label: string;
    arrowIcon?: boolean;
    onClick: () => void;
};

const RedirectButton = ({ label, arrowIcon = true, onClick }: RedirectButtonProps) => {
    return (
        <S.Container onClick={onClick}>
            <Label
                fontSize='14px'
                fontWeight='700'
                color={mainTheme.colors.mainBlack}
                textAlign='end'
            >
                {label}
            </Label>
            {arrowIcon && <ArrowIcon />}
        </S.Container>
    );
};

export default RedirectButton;
