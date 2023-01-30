import styled from "styled-components";
import mainBackgroudn from "../../../assets/mainBackground.png";

export const Container = styled.div`
    width: 1000px;
    background: url(${mainBackgroudn});
    border-radius: 10px;
    height: 700px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
    align-items: center;
    padding: 25px;
`;

export const ClosingContainer = styled.div`
    position: absolute;
    right: 15px;
`;

export const Post = styled.div`
    box-shadow: 6px 6px 25px rgba(0, 0, 0, 0.1);
    position: relative;
    background: #ffffff;
    border-radius: 10px;
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 15px;
    min-height: auto;
`;

export const InputContainer = styled.div`
    margin-top: 50px;
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 25px;
    align-items: center;
    gap: 25px;
`;
