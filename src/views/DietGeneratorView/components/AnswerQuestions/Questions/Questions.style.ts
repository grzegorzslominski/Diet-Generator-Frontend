import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const Container = styled.div`
  background: #FFFFFF;
  box-shadow: 6px 6px 25px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  width: 60%;
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 250px;
  justify-content: center;
  align-items: center;
  padding: 40px;
  gap: 20px;
  
  @media screen and (max-width: 750px){
    width: 100%;

  }
`

export const Border = styled.div`
  background: linear-gradient(184.44deg, rgba(106, 179, 91, 0.9) -2.43%, rgba(87, 82, 179, 0.5) -2.42%, rgba(87, 82, 179, 0.75) 87.44%);
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 550px;
  min-height: 54px;
  padding: 5px 0 5px 0;
  @media screen and (max-width: 1195px){
    min-width: 300px;
    max-width: 300px;
    padding: 20px;
  }
  @media screen and (max-width: 700px){
    min-width: 250px;
    max-width: 250px;
    padding: 10px;
  }
`

export const InputRadioContainer =  styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 700px){
    gap: 2px;
  }
`

export const InputRadioSingleItem = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1px;
  
`

export const WrapperBorder = styled.div`
  display: flex;
  flex-direction: column;
`

