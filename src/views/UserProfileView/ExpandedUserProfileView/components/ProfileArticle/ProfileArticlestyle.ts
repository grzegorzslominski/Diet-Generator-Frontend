import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    gap: 24px;

    & > img {
        min-width: 300px;
        max-width: 300px;
        min-height: 200px;
        max-height: 200px;
        object-fit: cover;
        object-position: center;
        border-radius: 8px;
    }

    @media screen and (max-width: 1220px) {
        flex-direction: column;

        img {
            width: 100%;
            max-height: 250px;
        }
    }

    @media screen and (max-width: 820px) {
        width: 100%;

        img {
            width: 100%;
        }
    }

    @media screen and (max-width: 480px) {
        img {
            border-radius: 4px;
        }
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 32px;
    width: 100%;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
`;

export const AuthorBox = styled.div`
    display: flex;
    padding-bottom: 2px;
    align-items: center;
    gap: 12px;
    width: 100%;

    & > img {
        height: 50px;
        max-height: 50px;
        width: 50px;
        border-radius: 50%;
    }
`;

export const ActionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-end;
    position: relative;
    & > div:last-child {
        position: absolute;
        bottom: -4px;
        right: 4px;
    }
`;
