import { mainTheme } from '../../../themes/mainTheme';

import { GradientLabelProps } from './GradientLabel.type';

import * as S from './GradientLabel.style';

const GradientLabel = ({ gradient, children, style }: GradientLabelProps) => {
    return (
        <S.Container gradient={gradient} mainTheme={mainTheme} style={{ ...style }}>
            {children}
        </S.Container>
    );
};

export default GradientLabel;
