import * as S from "./Switch.style";

type SwitchProps = {
    activeState?: boolean;
    size?: "small" | "normal";
    disable?: boolean;
    onClick: () => void;
};

const Switch = ({
    activeState = false,
    size = "normal",
    disable = false,
    onClick,
}: SwitchProps) => {
    return (
        <S.Container size={size} onClick={!disable ? onClick : () => {}} disable={disable}>
            <S.SwitchDot size={size} active={activeState} />
        </S.Container>
    );
};

export default Switch;
