import Label from "../../../../../../../components/UI/Label/Label";
import { mainTheme } from "../../../../../../../themes/mainTheme";
import * as S from "./RatingInput.style";

type RatingInputProps = {
    onChange: (value: number) => void;
    value: number | undefined;
};

const RatingInput = ({ onChange, value }: RatingInputProps) => {
    return (
        <S.Container>
            {Array.from(Array(10).keys()).map((item, index) => (
                <S.PointItemWrapper key={index}>
                    <S.PointItem
                        checked={index + 1 === value}
                        onClick={() => onChange(index + 1)}
                    />
                    <Label fontSize='12px' fontWeight='600' color={mainTheme.colors.mainBlack}>
                        {index + 1}
                    </Label>
                </S.PointItemWrapper>
            ))}
        </S.Container>
    );
};

export default RatingInput;
