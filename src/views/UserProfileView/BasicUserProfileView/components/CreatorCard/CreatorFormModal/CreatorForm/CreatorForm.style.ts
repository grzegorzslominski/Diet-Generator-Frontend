import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
    width: 100%;
`;

export const UploadBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: 125px;
`;

export const SocialsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Socials = styled.div`
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px 24px;
    padding: 12px 0;
`;

export const ErrorContainer = styled.div`
    position: absolute;
    left: 0;
    bottom: -18px;
`;
