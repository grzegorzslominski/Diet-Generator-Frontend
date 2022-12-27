import React from 'react';
import * as S from "./VerifyNewMeal.style"
import PostsLists from '../../PostsList/PostsLists';
import RightSection from '../RightSection/RightSection';
import { Outlet } from 'react-router-dom';
import { Meals } from '../NewestMeals/const/Meals';

const VerifyNewMeal = () => {
    return (
        <S.Container>
            <S.Posts>
              <PostsLists data={Meals} />
          </S.Posts>
          <RightSection data={Meals}/>
          <Outlet/>
        </S.Container>
    );
};

export default VerifyNewMeal;