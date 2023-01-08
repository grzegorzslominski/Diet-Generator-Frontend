import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;

    & > span:first-child {
        padding-left: 12px;
    }
`;

export const CreatorCard = styled.div`
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 36px;
    height: 338px;
    padding: 14px 0;
`;

export const RightSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
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
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

export const Description = styled.div`
    height: 120px;
    max-height: 120px;
    text-overflow: ellipsis;
    overflow: hidden;
    width: calc(100% - 24px);
`;

export const TagsContainer = styled.div`
    display: flex;
    gap: 6px;
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
`;
