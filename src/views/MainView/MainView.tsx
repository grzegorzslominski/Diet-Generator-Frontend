import { Route, Routes } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import { mainTheme } from "../../themes/mainTheme";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HomeView from "./HomeView/HomeView";
import DashboardView from "../DashboardView/components/DashboardView";

import * as S from "./MainView.style";

const MainView = () => {
    return (
        <ThemeProvider theme={mainTheme}>
            <S.Container>
                <Navbar />
                <S.Content>
                    <Routes>
                        <Route path='/' element={<HomeView />} />
                        <Route path='/dashboard' element={<DashboardView/>} />
                    </Routes>
                </S.Content>
                <Footer />
            </S.Container>
        </ThemeProvider>
    );
};

export default MainView;
