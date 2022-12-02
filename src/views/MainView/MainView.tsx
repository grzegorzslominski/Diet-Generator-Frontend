import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import { mainTheme } from "../../themes/mainTheme";
import useAuth from "../../hooks/useAuth";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import * as S from "./MainView.style";
import HomeView from "./HomeView/HomeView";
import DashboardView from "../DashboardView/components/DashboardView";
import MyDietView from "../MyDietView/MyDietView";

import { TStore } from "../../redux/store/store";

const MainView = () => {
    const user = useSelector((state: TStore) => state?.userReducer);

    const { authorizeUser } = useAuth();

    return (
        <ThemeProvider theme={mainTheme}>
            <S.Container>
                <Navbar authorizeUser={authorizeUser} />
                <S.Content>
                    <Routes>
                        <Route path='/' element={<HomeView />} />
                        <Route path='/dashboard' element={<DashboardView />} />
                        {/* {user && !isLoading && <Route path='/*' element={<Dashboard />} />} */}
                        <Route path='/dashboard' element={<DashboardView/>} />
                        <Route path='/myDiet' element={<MyDietView/>} />
                    </Routes>
                </S.Content>
                <Footer />
            </S.Container>
        </ThemeProvider>
    );
};

export default MainView;
