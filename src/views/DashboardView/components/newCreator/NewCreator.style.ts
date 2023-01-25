import styled from "styled-components";

export const ContentWrapper = styled.div`
    box-shadow: 6px 6px 25px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 16px;
    width: 100%;

    & > span:first-child {
        padding-left: 12px;
    }
`;

export const CreatorCard = styled.div`
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 36px;
    height: 326px;
    padding: 12px 0;

    @media screen and (max-width: 1680px) and (min-width: 1121px) {
        padding: 0;
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 760px) {
        padding: 0;
        grid-template-columns: 1fr;
        height: auto;
    }
`;

type ProfileAvatarProps = {
    backgroundIMG: string;
};

export const ProfileAvatar = styled.div<ProfileAvatarProps>`
    height: 100%;
    width: 100%;
    background-image: url(${({ backgroundIMG }) => backgroundIMG});
    background-size: cover;
    background-position: center;
    border-radius: 12px;

    @media screen and (max-width: 1680px) and (min-width: 1121px) {
        height: 180px;
        width: 140px;
        border-radius: 8px;
        position: absolute;
        top: 27px;
        left: 24px;
    }

    @media screen and (max-width: 760px) {
        height: 130px;
        width: 100px;
        border-radius: 8px;
    }
`;

export const RightSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media screen and (max-width: 1680px) and (min-width: 1121px) {
        align-items: flex-end;
        gap: 18px;
    }

    @media screen and (max-width: 760px) {
        align-items: flex-end;
        margin-top: -165px;
    }
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;

    @media screen and (max-width: 1680px) and (min-width: 1121px) {
        width: 170px;
    }

    @media screen and (max-width: 760px) {
        width: 115px;
    }
`;

export const Description = styled.div`
    display: flex;
    height: 175px;
    max-height: 175px;

    width: calc(100% - 24px);

    span {
        text-overflow: ellipsis;
        overflow: hidden;
    }

    @media screen and (max-width: 1680px) and (min-width: 1121px) {
        height: 130px;
        max-height: 130px;
        width: 170px;

        span {
            width: 190px;
            max-width: 190px;
            height: 130px;
            max-height: 130px;
        }
    }

    @media screen and (max-width: 760px) {
        margin-top: 50px;
        height: auto;
        max-height: auto;
        width: 100%;
    }
`;

export const TagsContainer = styled.div`
    display: flex;
    gap: 6px;

    @media screen and (max-width: 1680px) and (min-width: 1121px) {
        width: 100%;
    }

    @media screen and (max-width: 760px) {
        flex-wrap: wrap;
        column-gap: 12px;
        row-gap: 12px;
    }
`;

export const Tag = styled.div`
    position: relative;
    background: ${({ theme }) => theme.gradients.buttonGradient};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 14px;
    height: 24px;
    border-radius: 12px;
    z-index: 1;

    & > * {
        z-index: 3;
    }

    &::before {
        position: absolute;
        content: "";
        z-index: 2;
        top: 1px;
        left: 1px;
        width: calc(100% - 2px);
        height: 22px;
        background-color: white;
        border-radius: 12px;
        pointer-events: none;
    }
`;

export const ActionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 12px 0 0;

    @media screen and (max-width: 1680px) and (min-width: 1121px) {
        padding: 0;
        width: 100%;
        height: fit-content;

        & > div:first-child {
            height: fit-content;
        }

        & > div:last-child {
            margin-top: 64px;
        }
    }

    @media screen and (max-width: 760px) {
        padding: 0;
        width: 100%;

        & > div:first-child {
            height: fit-content;
        }

        & > div:last-child {
            margin-top: 24px;
        }
    }
`;
