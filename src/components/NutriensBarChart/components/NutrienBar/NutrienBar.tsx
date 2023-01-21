import { mainTheme } from "../../../../themes/mainTheme";

import Label from "../../../UI/Label/Label";

import * as S from "./NutrienBar.style";

type NutrienBarProps = {
    nutrienName: string;
    value?: number;
    barColor: string;
};

const NutrienBar = ({ nutrienName, value, barColor }: NutrienBarProps) => {
    return (
        <S.Container>
            <S.MainContent>
                <Label fontFamily='Lato' fontSize='13px' fontWeight='700'>
                    {value}g
                </Label>
                <S.Bar fillColor={barColor} fillValue={`${value}`} />
            </S.MainContent>
            <Label
                fontFamily='Lato'
                fontSize='10px'
                fontWeight='600'
                color={mainTheme.colors.mainBlack}
                textAlign='center'
            >
                {nutrienName}
            </Label>
        </S.Container>
    );
};
export default NutrienBar;
