import { Route, Routes, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import { mainTheme } from "../../themes/mainTheme";
import { NAVIGATION } from "../../navigation/paths";
import reducer from "../../redux/reducer/reducer";
import { getConfig } from "../../helpers/getConfig";
import { ConfigData, setConfig } from "../../redux/slices/config";
import useAuth from "../../hooks/useAuth";
import { TStore } from "../../redux/store/store";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import DashboardView from "../DashboardView/DashboardView";
import MyDietView from "../MyDietView/MyDietView";
import DietGeneratorView from "../DietGeneratorView/DietGeneratorView";
import HomeView from "../HomeView/HomeView";
import BasicUserProfileView from "../UserProfileView/BasicUserProfileView/BasicUserProfileView";
import NavbarVertical from "../../components/NavbarVertical/NavbarVertical";
import ExpandedUserProfileView from "../UserProfileView/ExpandedUserProfileView/ExpandedUserProfileView";
import PaymentView from "../PaymentView/PaymentView";
import ForumView from "../ForumView/ForumView";
import NewestPosts from "../ForumView/Outlet/NewestPosts/NewestPosts";
import NewestMeals from "../ForumView/Outlet/NewestMeals/NewestMeals";
import VerifyNewMeal from "../ForumView/Outlet/VerifyNewMeal/VerifyNewMeal";
import RecipeView from "../RecipeView/RecipeView";
import Spinner from "../../components/UI/Spinner/Spinner";

import * as S from "./MainView.style";

const MainView = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const { authorizeUser, isLoading } = useAuth();

    const user = useSelector((state: TStore) => state?.userReducer);
    const [verticalMenuIsOpen, setVerticalMenuIsOpen] = useState<boolean>(false);

    useEffect(() => {
        handleSetConfig();
    }, [reducer]);

    const handleSetConfig = async () => {
        const config: ConfigData = await getConfig();
        dispatch(setConfig(config));
    };

    const checkVerticalNavbarVisibility = (): boolean => {
        return (
            location.pathname !== NAVIGATION.home &&
            !location.pathname.includes(NAVIGATION.forum) &&
            Boolean(user)
        );
    };

    return (
        <ThemeProvider theme={mainTheme}>
            <S.Container>
                {isLoading ? (
                    <Spinner size='big' color='secondary' />
                ) : (
                    <>
                        <Navbar />
                        <S.ContentWrapper>
                            {checkVerticalNavbarVisibility() && (
                                <NavbarVertical
                                    handleMenuIsOpen={() => setVerticalMenuIsOpen((prev) => !prev)}
                                    isOpen={verticalMenuIsOpen}
                                />
                            )}
                            <S.Content
                                dashboard={checkVerticalNavbarVisibility()}
                                verticalMenuIsOpen={verticalMenuIsOpen}
                            >
                                <Routes>
                                    {user && (
                                        <>
                                            <Route
                                                path={NAVIGATION.dashboard}
                                                element={<DashboardView />}
                                            />
                                            <Route
                                                path={NAVIGATION.dietGenerator}
                                                element={<DietGeneratorView />}
                                            />
                                            <Route
                                                path={NAVIGATION.myDiet}
                                                element={<MyDietView />}
                                            />
                                            <Route
                                                path={NAVIGATION.default}
                                                element={<DashboardView />}
                                            />
                                            <Route
                                                path={NAVIGATION.basicUserProfile}
                                                element={<BasicUserProfileView />}
                                            />
                                            <Route
                                                path={NAVIGATION.expandedUserProfile}
                                                element={<ExpandedUserProfileView />}
                                            />
                                            <Route
                                                path={NAVIGATION.premium}
                                                element={<PaymentView />}
                                            />
                                            <Route
                                                path={`${NAVIGATION.recipe}`}
                                                element={<RecipeView />}
                                            />
                                            <Route
                                                path={`${NAVIGATION.recipe}/?mealID`}
                                                element={<RecipeView />}
                                            />
                                        </>
                                    )}
                                    <Route
                                        path={NAVIGATION.home}
                                        element={<HomeView authorizeUser={authorizeUser} />}
                                    />
                                    <Route path={NAVIGATION.forum} element={<ForumView />}>
                                        <Route
                                            path={`${NAVIGATION.forumPosts}`}
                                            element={<NewestPosts />}
                                        />
                                        <Route
                                            path={`${NAVIGATION.forumPosts}/:postID`}
                                            element={<NewestPosts />}
                                        />
                                        <Route
                                            path={NAVIGATION.forumMeals}
                                            element={<NewestMeals />}
                                        />
                                        <Route
                                            path={NAVIGATION.forumNewlyAddedMeals}
                                            element={<VerifyNewMeal />}
                                        />
                                    </Route>
                                    <Route
                                        path={NAVIGATION.default}
                                        element={
                                            user ? (
                                                <DashboardView />
                                            ) : (
                                                <HomeView authorizeUser={authorizeUser} />
                                            )
                                        }
                                    />
                                </Routes>
                                <Footer />
                            </S.Content>
                        </S.ContentWrapper>
                    </>
                )}
            </S.Container>
        </ThemeProvider>
    );
};

export default MainView;
