import React, { useState } from "react";
import * as S from "./ForumView.style"
import Label from "../../components/UI/Label/Label";
import { mainTheme } from "../../themes/mainTheme";
import PostsLists from "./PostsList/PostsLists";
import { NAV_ITEMS } from "./const/NavbarForum";
const ForumView = () => {

  return (
    <S.Container>
      <S.Header>
        {
          NAV_ITEMS.map((item) => {
            return <S.HeaderItem key={item.label}>
              <Label
                fontFamily='Lato'
                fontWeight='600'
                fontSize='1.5rem'
                lineHeight='2rem'
                textAlign='center'
                color={mainTheme.colors.mainBlack}
              >
                {item.label}
              </Label>
            </S.HeaderItem>
          })
        }
      </S.Header>
      <S.MiddleSection>
      <Label
        fontFamily='Lato'
        fontWeight='600'
        fontSize='1'
        lineHeight='2rem'
        color={mainTheme.colors.mainBlack}
      >
        Newest posts:
      </Label>
        <S.MiddleSectionWrapper>
          <S.Posts>
              <PostsLists/>
          </S.Posts>
          <S.RightSection>
          </S.RightSection>
        </S.MiddleSectionWrapper>
      </S.MiddleSection>
    </S.Container>
  );
};

export default ForumView;