import styled from "styled-components";
import Label from "../../../../components/UI/Label/Label";

export const Container = styled.div`
    position: relative;
    background-color: #FFFFFF;
    min-width: 570px;
    min-height: 400px;
    border-radius: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 20px;
    margin-top: 3%;
    
    
  
  @media screen and (max-width: 650px){
    align-items: center;
    flex-direction: column;
    min-width: unset;
    width: 400px;
    gap: 0;
    padding: 0;
    justify-content: center;

    @media screen and (max-width: 650px){
      width: 300px;
    }
`

export const ImgWrapper = styled.div`
  img {
    height: 350px;
  }

  @media screen and (max-width: 650px){
      img {
        height: 160px;
      }
  }
`

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5% 0 5% 0;
  justify-content: center;
  
  @media screen and (max-width: 650px){
    padding: 5px 0 5px 0;
    align-items: center;
  }
`

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 650px){
    align-items: center;
    justify-content: center;
    width: 60%;

  }
`

export const Description = styled.div`
  min-height: 170px;
  margin: 7% 0 7% 0;
  text-overflow: ellipsis;
  width: 220px;
  overflow: hidden;
  max-height: 110px;
  white-space: nowrap;

  @media screen and (max-width: 650px){
    min-height: 5vh;
    width: 50%;
    margin: 0;
  }
  
`

export const Icon = styled.div`
  border: 2px solid;
  border-image:  linear-gradient(#4E4B77,#6D5E9D,#F44B42,#F05840) 1 round;
  text-align: center;
  width: 33%;
  border-radius: 50%;
`

export const IconWrapper = styled.div`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;
  
  @media screen and (max-width: 650px){
    justify-content: space-evenly;
    min-height: 50px;
    margin-top: 10px;
  }


`
export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  gap: 1rem;
  align-items: center; 
  margin: 3% 0 3% 0;
  img {
    cursor: pointer;
  }
  @media screen and (max-width: 650px){
    
  }
  
`

export const ImageContainer = styled.div`
  img {
    height: 1.5rem;
  }
`

export const Button = styled.div`
  cursor: pointer;
  margin-left: auto;
  
`