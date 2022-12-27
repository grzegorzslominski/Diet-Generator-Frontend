import React from 'react';
import * as S from "./NewestPosts.style"
import PostsLists from '../../PostsList/PostsLists';
import { Posts } from '../../PostsList/const/Posts';
import RightSection from '../RightSection/RightSection';
import { Outlet } from 'react-router-dom';

const NewestPosts = () => {
    return (
        <S.Container>
            <S.Posts>
              <PostsLists data={Posts} />
          </S.Posts>
          <RightSection data={Posts}/>
          <Outlet/>
        </S.Container>
    );
};

export default NewestPosts;