import styled from "styled-components";
import mainBackgroudn from "../../../assets/mainBackground.png";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    position: relative;
    background-size: cover;
    background: url(${mainBackgroudn});
    align-items: center;
`;

export const TopSection = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    width: 80%;
    gap: 2rem;
    margin-top: 2%;
    align-items: center;
  
  @media screen and (max-width: 1420px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const LabelContainer = styled.div`

  
  @media screen and (max-width: 650px){
    display: flex;
    margin: 0 10px 0 10px;
    width: 350px;
    justify-content: center;
  }
`

export const ContainerItem1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;

  @media screen and (max-width: 1420px){
    align-items: center;
  }
`

export const ContainerItem2 = styled(ContainerItem1)`
  width: 60%;
  
`