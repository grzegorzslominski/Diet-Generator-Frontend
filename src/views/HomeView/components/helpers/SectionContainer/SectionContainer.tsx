import { ReactElement } from "react";
import Label from "../../../../../components/UI/Label/Label";
import { mainTheme } from "../../../../../themes/mainTheme";

import * as S from "./SectionContainer.style";

type SectionContainerProps = {
    title: string;
    children: ReactElement;
    backgroundColor?: string;
};

const SectionContainer = ({
    title,
    children,
    backgroundColor = "#ffffff",
}: SectionContainerProps) => {
    return (
        <S.Container backgroundColor={backgroundColor}>
            <S.Content>
                <Label
                    width='100%'
                    fontSize='1.8rem'
                    fontWeight='600'
                    color={mainTheme.colors.mainBlack}
                >
                    {title}
                </Label>
                {children}
            </S.Content>
        </S.Container>
    );
};

export default SectionContainer;
