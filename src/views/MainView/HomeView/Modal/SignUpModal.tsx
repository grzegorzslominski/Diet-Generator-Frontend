import React from "react";
import ReactDom from 'react-dom'
import * as S from './SignUpModal.style'

interface props {
    children?: React.ReactNode;
    onClose?: React.Dispatch<React.SetStateAction<boolean>>;
    // onClose: boolean
    open?: boolean;
}
const SignUpModal = ({children,onClose,open}: props) => {
    if(!open) return null;
    if(onClose)
        document.getElementById("root")!.style.filter = 'blur(0px) grayscale(0%)'

    return ReactDom.createPortal(
        <S.Container>
            <S.ContainerBG/>
            {children}
        </S.Container>,
        document.getElementById('portal')!,
        document.getElementById("root")!.style.filter = 'blur(5px)'

    )
};

export default SignUpModal;