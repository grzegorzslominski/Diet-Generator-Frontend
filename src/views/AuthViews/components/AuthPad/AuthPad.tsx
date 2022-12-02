import { useAuthViews } from "../../../../hooks/useAuthViews";
import { mainTheme } from "../../../../themes/mainTheme";

import CloseButton from "../../../../components/UI/CloseButton/CloseButton";
import Label from "../../../../components/UI/Label/Label";

import * as S from "./AuthPad.style";

type AuthPadProps = {
    header: string;
    children: React.ReactNode;
};
const AuthPad = ({ header, children }: AuthPadProps) => {
    const { closeAuthViews } = useAuthViews();

    return (
        <S.Contanier>
            <S.CloseContainer>
                <CloseButton onClick={closeAuthViews} />
            </S.CloseContainer>
            <S.Content>
                <Label
                    fontSize='25px'
                    color={mainTheme.colors.mainBlack}
                    fontWeight='600'
                    width='100%'
                    textAlign='center'
                >
                    {header}
                </Label>
                {children}
            </S.Content>
        </S.Contanier>
    );
};

export default AuthPad;
