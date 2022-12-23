import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
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
import NavbarVertical from "../../components/NavbarVertical/NavbarVertical";
import ExpandedUserProfileView from "../UserProfileView/ExpandedUserProfileView/ExpandedUserProfileView";

import { TStore } from "../../redux/store/store";

import * as S from "./MainView.style";

const MainView = () => {
    const user = useSelector((state: TStore) => state?.userReducer);
    const [verticalMenuIsOpen, setVerticalMenuIsOpen] = useState<boolean>(false);

    const dispatch = useDispatch();

    useEffect(() => {
        handleSetConfig();
    }, [reducer]);

    const handleSetConfig = async () => {
        const config: ConfigData = await getConfig();
        dispatch(setConfig(config));
    };

    const hadnleSetVerticalMenu = (actionType: "change" | "close") => {
        setVerticalMenuIsOpen(actionType === "change" ? !verticalMenuIsOpen : false);
    };

    return (
        <ThemeProvider theme={mainTheme}>
            <S.Container>
                <Navbar />
                {true && (
                    <NavbarVertical
                        handleMenuIsOpen={hadnleSetVerticalMenu}
                        isOpen={verticalMenuIsOpen}
                    />
                )}
                <S.Content user={true} verticalMenuIsOpen={verticalMenuIsOpen}>
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
                                <Route
                                    path={NAVIGATION.expandedUserProfile}
                                    element={<ExpandedUserProfileView />}
                                />
                            </>
                        )}
                        <Route path={NAVIGATION.home} element={<HomeView />} />
                        <Route path={NAVIGATION.default} element={<HomeView />} />
                    </Routes>
                    <Footer />
                </S.Content>
            </S.Container>
        </ThemeProvider>
    );
};

export default MainView;
