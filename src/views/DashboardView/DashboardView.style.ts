import styled from "styled-components";
import mainBackgroudn from "../../assets/mainBackground.png";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 90%;
    max-width: 1920px;
    position: relative;
    background-size: cover;
    background: url(${mainBackgroudn});
    align-items: center;
`

export const TopSection = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    width: 80%;
    gap: 1rem;
    margin-top: 2%;
    max-height: 450px;
    @media screen and (max-width: 1900px){
      justify-content: center;
    }
  @media screen and (max-width: 1530px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 1000px;
  }


`;

export const ContainerItem1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 41%;
  @media screen and (max-width: 1900px){
    align-items: center;
    width: 578px;
  }
  
  @media screen and (max-width: 720px){
    width: 100%;
  }

`;

export const ContainerItem2 = styled(ContainerItem1)`
    width: 59%;
  @media screen and (max-width: 1900px){
    width: 750px;
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 720px){
    width: 100%;
  }


`;
