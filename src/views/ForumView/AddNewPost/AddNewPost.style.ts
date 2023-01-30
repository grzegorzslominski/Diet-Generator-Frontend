import styled from "styled-components";
import mainBackgroudn from "../../../assets/mainBackground.png";

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

export const ClosingContainer = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
`;

export const InputContainer = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    @media screen and (max-width: 1240px) {
        width: 100%;
    }
`;

export const UploadBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: 200px;
    width: 80%;

    @media screen and (max-width: 720px) {
        width: 100%;
    }
`;
