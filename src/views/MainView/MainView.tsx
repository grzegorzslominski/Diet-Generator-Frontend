import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import { mainTheme } from '../../themes/mainTheme';

import Navbar from '../../components/Navbar/Navbar';

import * as S from './MainView.style';

const MainView = () => {
    return (
        <ThemeProvider theme={mainTheme}>
            <S.Container>
                <Navbar />
                <S.Content></S.Content>
            </S.Container>
        </ThemeProvider>
    );
};

export default MainView;
