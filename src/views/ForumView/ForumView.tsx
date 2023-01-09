import React, { useState } from "react";
import * as S from "./ForumView.style";
import Label from "../../components/UI/Label/Label";
import { mainTheme } from "../../themes/mainTheme";
import { NAV_ITEMS, NavbarForumI } from "./const/NavbarForum";
import { Outlet, useNavigate } from "react-router-dom";
const ForumView = () => {
    const navigate = useNavigate();

    const navigationHandler = (item: NavbarForumI) => {
        if (item.routing) {
            if (item.external) {
                window.open(item.routing, "_self");
            } else navigate(item.routing);
        }
    };

    return (
        <S.Container>
            <S.Header>
                {NAV_ITEMS.map((item) => {
                    return (
                        <S.HeaderItem key={item.label} onClick={() => navigationHandler(item)}>
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
                    );
                })}
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
                <Outlet />
            </S.MiddleSection>
        </S.Container>
    );
};

export default ForumView;
