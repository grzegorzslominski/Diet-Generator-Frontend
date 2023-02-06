import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 42px;
    min-height: 100%;
    width: 1100px;

    @media screen and (max-width: 1250px) {
        width: 700px;
    }
`;

export const PostContainer = styled.div`
    display: grid;
    grid-template-columns: 60px 1fr;
`;

export const PostInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px 12px 24px 12px;
    background: #ccd7e3;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    width: 100%;
`;

export const InfoItem = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    svg {
        width: 15px;
        max-width: 15px;
        height: auto;
        cursor: pointer;
        path {
            fill: ${({ theme }) => theme.colors.secondaryColor};
        }
    }
`;

export const PostContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 0 24px 12px 24px;
`;

export const Header = styled.div`
    display: grid;
    grid-template-columns: 1fr 100px;
    gap: 24px;
    align-items: end;
    padding-top: 24px;
`;

export const MiddleSectio = styled.div`
    display: grid;
    grid-template-columns: 350px 1fr;
    height: 250px;
    gap: 36px;
    img {
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 250px;
        border-radius: 10px;
    }
`;
