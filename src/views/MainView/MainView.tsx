import { Route, Routes } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import { mainTheme } from "../../themes/mainTheme";

import Navbar from "../../components/Navbar/Navbar";

import * as S from "./MainView.style";
import HomeView from "./HomeView/HomeView";

const MainView = () => {
    return (
        <ThemeProvider theme={mainTheme}>
            <S.Container>
                <Navbar />
                <S.Content>
                    <Routes>
                        <Route path='/' element={<HomeView />} />
                    </Routes>
                </S.Content>
                {/* <Footer /> */}
            </S.Container>
        </ThemeProvider>
    );
};

export default MainView;
