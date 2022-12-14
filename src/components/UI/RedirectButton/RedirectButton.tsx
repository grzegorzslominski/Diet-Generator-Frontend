import Label from "../Label/Label";
import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow.svg";

import * as S from "./RedirectButton.style";
import { mainTheme } from "../../../themes/mainTheme";

type RedirectButtonProps = {
    label: string;
    onClick: () => void;
};

const RedirectButton = ({ label, onClick }: RedirectButtonProps) => {
    return (
        <S.Container onClick={onClick}>
            <Label fontSize='14px' fontWeight='700' color={mainTheme.colors.mainBlack}>
                {label}
            </Label>
            <ArrowIcon />
        </S.Container>
    );
};

export default RedirectButton;