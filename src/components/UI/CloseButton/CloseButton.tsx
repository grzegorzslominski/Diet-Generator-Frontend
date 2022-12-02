import { ReactComponent as CloseIcon } from "../../../assets/icons/x.svg";
import { mainTheme } from "../../../themes/mainTheme";

import * as S from "./CloseButton.style";

type CloseButtonProps = {
    size?: "normal" | "big";
    color?: string;
    onClick: () => void;
};

const CloseButton = ({
    size = "normal",
    onClick,
    color = mainTheme.colors.mainBlack,
}: CloseButtonProps) => {
    return (
        <S.Container onClick={onClick} color={color} size={size}>
            <CloseIcon />
        </S.Container>
    );
};

export default CloseButton;
