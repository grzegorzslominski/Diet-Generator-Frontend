import styled from "styled-components";

export const Container = styled.div`
    padding: 1.5rem;
    width: 95%;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 96px;
`;

export const TopSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 80%;
`;

export const LinksContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    row-gap: 10px;
`;

export const SocialSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 0.5rem;
`;
