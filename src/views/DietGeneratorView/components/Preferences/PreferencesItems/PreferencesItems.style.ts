import styled, { css } from "styled-components";


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
  position: relative;
  min-height: 300px;
  margin: 0 50px 0 50px;
  display: grid;
  grid-template-columns: repeat(6,minmax(0,1fr));
  gap: 10px;
  place-items: start;
  padding: 40px;
  transition: transform .2s;

  @media (hover: hover) {

    div:hover {
      transform: scale(1.05);
    }
  }
  @media screen and (max-width: 1785px){
    padding: 20px;
    grid-template-columns: repeat(4,minmax(0,1fr));
  }
  @media screen and (max-width: 1160px){
    grid-template-columns: repeat(4,minmax(0,1fr));
    gap: 5px;
    width: 100%;
  }
  @media screen and (max-width: 900px){
    grid-template-columns: repeat(3,minmax(0,1fr));
    margin: 0;
    width: 100%;
  }
  @media screen and (max-width: 540px){
    grid-template-columns: repeat(2,minmax(0,1fr));

  }


`

export const Content = styled.div`
  cursor: pointer;
  
`

export const ButtonContainer = styled.button`
  all: unset;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 3px;
  cursor: pointer;


`

export const Border = styled.div`
  background: linear-gradient(184.44deg, rgba(106, 179, 91, 0.9) -2.43%, rgba(87, 82, 179, 0.5) -2.42%, rgba(87, 82, 179, 0.75) 87.44%);
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  min-height: 54px;
  position: relative;
  z-index: 2;


`
interface prop {
  selected: boolean;
}
export const Customize = styled.div<prop>`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;

  ${({selected}) => selected ? css `
    span{
      position: absolute;
      display: block;
      height: 3px;
      width: 134px;
      background: #CD5C5C;
      transform: rotate(20deg);
      top: 46%;
      left: -2.5%;
    }
    span:last-of-type{
      transform: rotate(340deg);
    }
    
  ` : null}
`