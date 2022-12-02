import { ReactComponent as GoogleIcon } from "../../../../assets/icons/google.svg";
import { ReactComponent as Facebook } from "../../../../assets/icons/facebook.svg";

import Label from "../../../../components/UI/Label/Label";

import * as S from "./ExternalAuthProvidres.style";

type ExternalAuthProvidres = {
    authType: "login" | "register";
};

const ExternalAuthProvidres = ({ authType }: ExternalAuthProvidres) => {
    return (
        <S.Container>
            <S.GoogleAuthButton>
                <GoogleIcon />
                <Label fontSize='12px' fontWeight='600'>
                    Sign {authType === "login" ? "in" : "up"} with Google
                </Label>
            </S.GoogleAuthButton>

            <S.FacebookAuthButton>
                <Facebook className='.facebbok' />
                <Label fontSize='12px' fontWeight='600' color='white'>
                    Continue with Facebook
                </Label>
            </S.FacebookAuthButton>
        </S.Container>
    );
};

export default ExternalAuthProvidres;
