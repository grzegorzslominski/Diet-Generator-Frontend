import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../../themes/mainTheme"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HomeView from "./HomeView/HomeView";
import * as S from "./MainView.style";
import DashboardView from "../DashboardView/components/DashboardView";
import MyDietView from "../MyDietView/MyDietView";
import DietGeneratorView from "../DietGeneratorView/DietGeneratorView";

const MainView = () => {
    return (
        <ThemeProvider theme={mainTheme}>
            <S.Container>
                <Navbar />
                <S.Content>
                    <Routes>
                        <Route path='/' element={<HomeView />} />
                        <Route path='/dashboard' element={<DashboardView />} />
                        <Route path='/myDiet' element={<MyDietView />} />
                        <Route path='/DietGenerator' element={<DietGeneratorView />} />

                    </Routes>
                </S.Content>
                <Footer />
            </S.Container>
        </ThemeProvider>
    );
};

export default MainView;
