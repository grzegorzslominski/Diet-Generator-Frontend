import * as S from "./ViewBox.style";

type ViewBox = {
    children: React.ReactNode;
};

const ViewBox = ({ children }: ViewBox) => {
    return <S.Container>{children}</S.Container>;
};

export default ViewBox;
