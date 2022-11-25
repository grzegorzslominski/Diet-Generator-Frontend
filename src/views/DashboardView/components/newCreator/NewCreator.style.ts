import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFFFFF;
    width: 590px;
    height: 400px;
    border-radius: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 5% 5% 5% 5%;
    margin-top: 3%;
    
    img {
      height: 350px;
    }
`

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5% 0 5% 0;
  justify-content: center;
`

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
`

export const Description = styled.div`
  width: 100%;
  min-height: 15vh;
  margin: 7% 0 7% 0;
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