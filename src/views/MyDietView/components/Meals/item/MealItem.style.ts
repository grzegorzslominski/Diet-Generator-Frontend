import styled, { css } from "styled-components";


export const Wrapper = styled.div`
  background: #FFFFFF;
  box-shadow: 6px 6px 25px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  max-width: 1100px;
  min-height: 165px;
  position: relative;
  
  @media screen and (max-width: 870px){
    max-width: 600px;
    min-height: 200px;
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px 15px 50px;

  @media screen and (max-width: 870px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 20px 30px 20px;
  }
`

export const Line = styled.div`
  border: 2px solid #F5F6FA;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 22%;
  width: 80%;
  display: flex;
`

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 870px) {
    gap: 10px;
  }
  
  
`

export const Border = styled.div`
  border: 1px solid #4E4C75;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  margin-top: 30px;

  @media screen and (max-width: 870px) {
    margin: 0;
  }
`

export interface prop {
  isOpen: boolean;
}
export const MiddleSection = styled.div<prop>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  
  img {
    height: 15px;
    cursor: pointer;
    position: absolute;
    left: calc(50% - 40px);
    transform: translateX(-50%);
    bottom: 10px;
    ${({isOpen}) => isOpen ? css`
        transform: translateX(-50%) rotateX(180deg);
      ` : null};
  }
  padding-left: 10px;
  padding-right: 10px;
  

  
  @media screen and (max-width: 870px) {
    margin: 10px 0 10px 0;
    padding: 0;
    
    img {
       bottom: 10px;
       left: 50%;
    }
  }
`

export const UlStyled = styled.ul`
  display: grid;
  padding-left: 0;
  grid-template-columns: repeat(3,auto);
  gap: 10px;
  list-style-type: none;
  justify-items: start;
  
  @media screen and (max-width: 870px){
    margin: 0;
  }
`

export const LiStyled = styled.li`
  color: black;
  
  @media screen and (max-width: 870px) {
    display: flex;
    font-size: 20px;
  }
  
`

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
`

export const LabelContainer = styled.div`
  display: flex;
  gap: 5px;
  justify-content: flex-end;
  align-items: center;
  
  @media screen and (max-width: 870px){
    justify-content: center;
  }
`

export const KcalContainer = styled.div`
  display: flex;
  align-items: flex-end;
  padding-top: 3px;
  

`