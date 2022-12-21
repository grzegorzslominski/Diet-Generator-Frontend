import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";

import { mainTheme } from "../../themes/mainTheme";
import { NAVIGATION } from "../../navigation/paths";
import reducer from "../../redux/reducer/reducer";
import { getConfig } from "../../helpers/getConfig";
import { ConfigData, setConfig } from "../../redux/slices/config";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import DashboardView from "../DashboardView/DashboardView";
import MyDietView from "../MyDietView/MyDietView";
import DietGeneratorView from "../DietGeneratorView/DietGeneratorView";
import HomeView from "../HomeView/HomeView";
import BasicUserProfileView from "../UserProfileView/BasicUserProfileView/BasicUserProfileView";

import { TStore } from "../../redux/store/store";

import * as S from "./MainView.style";
import ForumView from "../ForumView/ForumView";

const MainView = () => {
    const user = useSelector((state: TStore) => state?.userReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        handleSetConfig();
    }, [reducer]);

    const handleSetConfig = async () => {
        const config: ConfigData = await getConfig();
        dispatch(setConfig(config));
    };

    return (
        <ThemeProvider theme={mainTheme}>
            <S.Container>
                <Navbar />
                <S.Content>
                    <Routes>
                        {true && (
                            <>
                                <Route path={NAVIGATION.dashboard} element={<DashboardView />} />
                                <Route
                                    path={NAVIGATION.dietGenerator}
                                    element={<DietGeneratorView />}
                                />
                                <Route path={NAVIGATION.myDiet} element={<MyDietView />} />
                                <Route path={NAVIGATION.default} element={<DashboardView />} />
                                <Route
                                    path={NAVIGATION.basicUserProfile}
                                    element={<BasicUserProfileView />}
                                />
                              <Route path={NAVIGATION.forum} element={<ForumView/>} />
                            </>
                        )}
                        <Route path={NAVIGATION.home} element={<HomeView />} />
                        <Route path={NAVIGATION.default} element={<HomeView />} />
                    </Routes>
                </S.Content>
                <Footer />
            </S.Container>
        </ThemeProvider>
    );
};

export default MainView;
