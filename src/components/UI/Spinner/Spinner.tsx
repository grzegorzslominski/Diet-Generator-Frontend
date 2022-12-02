import { SpinnerProps } from "./Spinner.type";

import * as S from "./Spinner.style";

const Spinner = ({ size = "medium" }: SpinnerProps) => {
    return (
        <S.Container>
            <S.Ring size={size}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </S.Ring>
        </S.Container>
    );
};

export default Spinner;
