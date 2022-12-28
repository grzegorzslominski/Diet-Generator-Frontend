import * as S from "./ViewBox.style";

type ViewBox = {
    children: React.ReactNode;
    paddintTop?: boolean;
    maxWidth?: string;
};

const ViewBox = ({ children, paddintTop = true, maxWidth = "1720px" }: ViewBox) => {
    return (
        <S.Container paddintTop={paddintTop} maxWidth={maxWidth}>
            {children}
        </S.Container>
    );
};

export default ViewBox;
