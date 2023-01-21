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
  display: flex;
  position: relative;
  min-height: 250px;
  justify-content: space-evenly;
  align-items: center;
  transition: transform .2s;

  @media (hover: hover) {

    div:hover {
      transform: scale(1.2);
    }
  }
  
  @media screen and (max-width: 1400px){
    display: grid;
    grid-template-columns: repeat(2,minmax(0,1fr));
    gap: 10px;
    padding: 20px;
  }
  @media screen and (max-width: 750px) {
    display: grid;
    grid-template-columns: repeat(2,minmax(0,1fr));
    gap: 10px;
    padding: 20px;
    width: 100%;
  }


`

export const Border = styled.div`
  background: linear-gradient(184.44deg, rgba(106, 179, 91, 0.9) -2.43%, rgba(87, 82, 179, 0.5) -2.42%, rgba(87, 82, 179, 0.75) 87.44%);
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  min-height: 60px;
  min-width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  
  @media screen and (max-width: 500px){
    max-width: 100px;
    min-width: 100px;

  }

`
interface prop {
  selected: boolean;
}
export const Content = styled.div<prop>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;


  &>svg {
    height: 60px;
    width: 60px;
  }
  border: solid 1px lightgray;
  padding: 10px 10px 10px 10px;
  cursor: pointer;
  
  ${({selected}) => selected ? css `background-color: whitesmoke` : null}
  
`