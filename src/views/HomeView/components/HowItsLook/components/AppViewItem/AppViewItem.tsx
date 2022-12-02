import { useEffect, useRef, useState } from "react";
import Label from "../../../../../../components/UI/Label/Label";
import { mainTheme } from "../../../../../../themes/mainTheme";
import { HowItsLookExample } from "../../const/viewsData";

import * as S from "./AppViewItem.style";

const AppViewItem = ({ image, description }: HowItsLookExample) => {
    return (
        <S.Container>
            <S.View>
                <img src={image} alt='Example app view' />
            </S.View>

            <S.Description>
                <Label
                    fontFamily='Lato'
                    fontSize='0.8rem'
                    color={mainTheme.colors.mainBlack}
                    textAlign='center'
                >
                    {description}
                </Label>
            </S.Description>
        </S.Container>
    );
};

export default AppViewItem;
