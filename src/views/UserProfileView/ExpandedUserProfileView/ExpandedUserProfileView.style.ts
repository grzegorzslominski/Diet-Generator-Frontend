import styled from "styled-components";
import { mainTheme } from "../../../themes/mainTheme";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 1400px;
    align-items: center;

    @media screen and (max-width: 1600px) {
        width: 1160px;
    }

    @media screen and (max-width: 1280px) {
        width: 1060px;
    }

    @media screen and (max-width: 1220px) {
        width: 720px;
    }

    @media screen and (max-width: 820px) {
        width: 520px;
    }

    @media screen and (max-width: 620px) {
        width: 100%;
    }
`;

type TopBackgroundProps = {
    backgroundIMG: string;
};

export const TopBackground = styled.div<TopBackgroundProps>`
    width: 100%;
    height: 12rem;
    background: url(${({ backgroundIMG }) => backgroundIMG});
    background-position: center;
    background-size: cover;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

    @media screen and (max-width: 1220px) {
        height: 10rem;
    }

    @media screen and (max-width: 620px) {
        height: 8rem;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
    }

    @media screen and (max-width: 560px) {
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100% - 9.75rem);
    align-items: center;
    gap: 48px;

    @media screen and (max-width: 1220px) {
        width: calc(100% - 2rem);
    }

    @media screen and (max-width: 620px) {
        width: 100%;
        padding: 0 24px;
    }

    @media screen and (max-width: 420px) {
        width: 100%;
        padding: 0 8px;
    }
`;

export const TopSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const MainDetails = styled.div`
    display: flex;
    gap: 24px;

    @media screen and (max-width: 620px) {
        justify-content: space-between;
        padding: 0 6px;
    }
`;

export const SocialContainer = styled.div`
    display: flex;
    padding-top: 24px;
    height: fit-content;

    @media screen and (max-width: 820px) {
        & > div {
            flex-direction: column-reverse;
        }
    }

    @media screen and (max-width: 620px) {
        padding-top: 14px;
    }
`;

type UserAvatarProps = {
    avatarIMG: string;
};

export const UserAvatar = styled.div<UserAvatarProps>`
    background: url(${({ avatarIMG }) => avatarIMG});
    background-position: center;
    background-size: cover;
    border-radius: 50%;
    width: 12rem;
    height: 12rem;
    min-height: 12rem;
    max-height: 12rem;
    border: 10px solid white;
    margin-top: -72px;

    @media screen and (max-width: 1220px) {
        width: 10rem;
        height: 10rem;
        min-height: 10rem;
        max-height: 10rem;
        border: 8px solid white;
        margin-top: -45px;
    }

    @media screen and (max-width: 620px) {
        width: 9rem;
        height: 9rem;
        min-height: 9rem;
        max-height: 9rem;
        border: 6px solid white;
        margin-top: -35px;
    }
`;

export const UserNameContanier = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 24px;

    @media screen and (max-width: 1220px) {
        padding-top: 18px;

        & > span:first-child {
            font-size: 20px;
        }

        & > span:last-child {
            font-size: 12px;
        }
    }

    @media screen and (max-width: 620px) {
        padding-top: 10px;

        & > span:first-child {
            font-size: 18px;
        }
    }
`;

export const UserFollowers = styled.div`
    display: flex;
    gap: 12px;
    padding-top: 18px;
    svg {
        width: 10px;
        height: auto;
        fill: ${mainTheme.colors.inputText};
    }
    @media screen and (max-width: 1220px) {
        padding-top: 12px;
    }

    @media screen and (max-width: 620px) {
        padding-top: 8px;

        & > span:first-child {
            font-size: 14px;
        }
    }
`;

export const MealsContainer = styled.div`
    width: 100%;

    @media screen and (max-width: 1600px) {
        width: calc(100% - 60px);
    }

    @media screen and (max-width: 1280px) {
        width: calc(100% - 260px);
    }

    @media screen and (max-width: 1220px) {
        width: calc(100% - 64px);
    }

    @media screen and (max-width: 820px) {
        width: 270px;
    }
`;
