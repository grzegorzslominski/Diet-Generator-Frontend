import styled from "styled-components";
import mainBackgroudn from "../../assets/mainBackground.png";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    position: relative;
    background-size: cover;
    background: url(${mainBackgroudn});
    align-items: center;
    margin: 50px 0 50px 0;
`;

