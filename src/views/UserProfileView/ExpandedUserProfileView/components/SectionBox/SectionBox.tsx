import { ReactElement } from "react";

import { mainTheme } from "../../../../../themes/mainTheme";

import Label from "../../../../../components/UI/Label/Label";

import * as S from "./SectionBox.style";

type SectionBoxProps = {
    title: string;
    children: ReactElement;
    padding?: string;
    gap?: string;
};

const SectionBox = ({ title, children, padding = "12px", gap = "12px" }: SectionBoxProps) => {
    return (
        <S.Container padding={padding}>
            <S.Content gap={gap}>
                <Label
                    width='100%'
                    fontSize='18px'
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

export default SectionBox;
