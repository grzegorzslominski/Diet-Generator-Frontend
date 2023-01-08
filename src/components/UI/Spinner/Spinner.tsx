import * as S from "./Spinner.style";

export type SpinnerProps = {
    size?: "small" | "medium" | "big";
    color?: "primary" | "secondary";
};

const Spinner = ({ size = "medium", color = "primary" }: SpinnerProps) => {
    return (
        <S.Container>
            <S.Ring size={size} color={color}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </S.Ring>
        </S.Container>
    );
};

export default Spinner;
