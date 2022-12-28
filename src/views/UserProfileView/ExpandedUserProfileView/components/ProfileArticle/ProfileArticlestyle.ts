import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    gap: 24px;

    img {
        width: 350px;
        max-height: 200px;
        object-fit: cover;
        object-position: center;
        border-radius: 8px;
    }

    @media screen and (max-width: 1220px) {
        flex-direction: column;
        width: 512px;

        img {
            width: 512px;
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
        width: 212px;

        img {
            width: 212px;
            border-radius: 4px;
        }
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 36px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
`;

export const ActionContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
