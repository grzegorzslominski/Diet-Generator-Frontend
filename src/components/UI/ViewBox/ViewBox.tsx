import { useEffect } from "react";
import * as S from "./ViewBox.style";

type ViewBox = {
    children: React.ReactNode;
    paddintTop?: boolean;
    maxWidth?: string;
};

const ViewBox = ({ children, paddintTop = true, maxWidth = "1720px" }: ViewBox) => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, []);

    return (
        <S.Container paddintTop={paddintTop} maxWidth={maxWidth}>
            {children}
        </S.Container>
    );
};

export default ViewBox;
