import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    position: relative;

    @media screen and (max-width: 1240px) {
        padding-top: 64px;
    }
`;

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    position: relative;
`;

export const SectionTitle = styled.div`
    position: absolute;
    top: -64px;
    left: -24px;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;

    img {
        width: 55px;
        max-width: 55px;
        height: 55px;
        object-fit: cover;
        object-position: center;
        border-radius: 50%;
    }
`;

export const PostTitle = styled.div`
    min-height: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const BottomPostSection = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: space-between;
`;

export const Icons = styled.div`
    display: flex;
    gap: 12px;

    & > svg {
        height: 18px;
        max-height: 18px;
        width: auto;
    }
`;

export const AddPost = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    width: 205px;
`;

export const Footer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
`;
