import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import { mainTheme } from '../../themes/mainTheme';

import * as S from './MainView.style';

const MainView = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <S.Container>
        {/* <Navbar /> */}
        <S.Content>
          <Routes>{/* <Route path='/' element={<SummaryView />} /> */}</Routes>
        </S.Content>
      </S.Container>
    </ThemeProvider>
  );
};

export default MainView;
