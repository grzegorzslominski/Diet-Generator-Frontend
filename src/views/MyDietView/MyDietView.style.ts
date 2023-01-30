import styled from "styled-components";
import mainBackgroudn from "../../assets/mainBackground.png";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    background-size: cover;
    background: url(${mainBackgroudn});
    align-items: center;
`;
