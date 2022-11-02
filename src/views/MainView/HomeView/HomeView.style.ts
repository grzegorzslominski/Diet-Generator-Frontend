import styled from "styled-components";
import topBackground from "../../../assets/homepage/background.png";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const TopSection = styled.div`
    width: 100%;
    background: url(${topBackground});
    background-size: contain;
    padding: 2rem 0 4rem 0;
`;

export const TopSectionContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    @media screen and (max-width: 960px) {
        padding: 0 32px;
        & > span:first-child {
            width: 100%;
        }
    }

    @media screen and (max-width: 620px) {
        & > span:last-child {
            padding: 0 24px;
            width: 100%;
        }
    }
`;

export const LogoContainer = styled.div`
    img {
        height: 7rem;
    }
`;
