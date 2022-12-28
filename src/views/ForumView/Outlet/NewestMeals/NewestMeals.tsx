import React from 'react';
import * as S from "./NewestMeals.style"
import PostsLists from '../../PostsList/PostsLists';
import { Meals } from './const/Meals';
import RightSection from '../RightSection/RightSection';
import { Outlet } from 'react-router-dom';

const NewestMeals = () => {
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

export default NewestMeals;