import styled from "styled-components";

export const Container = styled.div`
    width: 620px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;

    @media screen and (max-width: 1240px) {
        width: 600px;
    }

    @media screen and (max-width: 720px) {
        width: 320px;
    }
`;

export const InputContainer = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;

    gap: 24px;

    @media screen and (max-width: 1240px) {
        width: 100%;
    }
`;

export const UploadBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: 250px;
    width: 100%;

    @media screen and (max-width: 720px) {
        width: 100%;
    }
`;
