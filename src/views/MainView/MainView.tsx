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
import NewestPosts from "../ForumView/Outlet/NewestPosts/NewestPosts";
import NewestMeals from "../ForumView/Outlet/NewestMeals/NewestMeals";
import Feedback from "../ForumView/Outlet/Feedback/Feedback";
import SinglePostItem from "../ForumView/PostsList/SinglePostItem/SinglePostItem";
import { Posts } from "../ForumView/PostsList/const/Posts";
import { Meals } from "../ForumView/Outlet/NewestMeals/const/Meals";
import VerifyNewMeal from "../ForumView/Outlet/VerifyNewMeal/VerifyNewMeal";

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
                              <Route path={NAVIGATION.forum} element={<ForumView/>} >
                                <Route path={NAVIGATION.forumPosts} element={<NewestPosts/>} >
                                    <Route path={`${NAVIGATION.forumPost}/:postId`} element={<SinglePostItem path="/forum/posts" list={Posts}/>}/>
                                    </Route>
                                <Route path={NAVIGATION.forumMeals} element={<NewestMeals/>} >
                                    <Route path={`${NAVIGATION.forumMeal}/:postId`} element={<SinglePostItem path="/forum/newMeals" list={Meals}/>} />
                                    </Route>
                                <Route path={NAVIGATION.forumFeedbacks} element={<Feedback/>} >
                                <Route path={`${NAVIGATION.forumFeedback}/:postId`} element={<SinglePostItem path="/forum/feedbacks" list={Posts}/>} />
                                    </Route>
                                <Route path={NAVIGATION.forumNewlyAddedMeals} element={<VerifyNewMeal/>} >
                                <Route path={`${NAVIGATION.forumNewlyAddedMeal}/:postId`} element={<SinglePostItem path="/forum/newlyAddedMeals" list={Meals}/>} />
                                    </Route>
                              </Route>
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
