import React, { useEffect } from "react";
import ReactDom from "react-dom";

import * as S from "./ModalPortal.style";

interface SignUpModalProps {
    children?: React.ReactNode;
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
    blurBackground?: boolean;
    blurLevel?: "normal" | "strong";
    close: () => void;
}
const ModalPortal = ({
    children,
    position,
    blurBackground = false,
    blurLevel = "strong",
    close,
}: SignUpModalProps) => {
    useEffect(() => {
        if (blurBackground) {
            document.getElementById("root")!.style.filter = `blur(${
                blurLevel === "strong" ? "5px" : "2px"
            })`;

            return () => {
                document.getElementById("root")!.style.filter = "blur(0px)";
            };
        }
    }, []);

    return ReactDom.createPortal(
        <S.Container>
            <S.ContainerBG
                onMouseDown={() => {
                    close ? close() : null;
                }}
            >
                <S.Content onMouseDown={(e) => e.stopPropagation()} position={position}>
                    {children}
                </S.Content>
            </S.ContainerBG>
        </S.Container>,
        document.getElementById("portal")!,
    );
};

export default ModalPortal;
