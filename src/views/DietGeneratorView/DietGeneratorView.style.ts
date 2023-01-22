import styled, { css } from "styled-components";
import mainBackgroudn from "../../assets/mainBackground.png";
import { mainTheme } from "../../themes/mainTheme";

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

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(5,100px);
  width: 100%;
  justify-content: center;
  gap: 20px;

  @media screen and (max-width: 1400px){
    display: grid;
    grid-template-columns: repeat(2,100px);
    width: 100%;
    justify-content: center;
    gap: 20px;
  }

  @media screen and (max-width: 750px){
    display: grid;
    grid-template-columns: repeat(2,60px);
    width: 100%;
    justify-content: center;
    gap: 10px;
  }
`

interface prop {
  isOpen: boolean;
}

export const productItem = styled.div<prop>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  
  cursor: pointer;

  ${({isOpen}) => isOpen ? css `
    border: 1px solid green;
  ` : css`
    border: 1px solid ${mainTheme.colors.secondaryColor};
  `}


`

interface prop2 {
  selected: boolean;
}

export const Content = styled.div<prop2>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 30%;

  @media screen and (max-width: 1400px) {
    width: 120px;
  }

  &>svg {
    width: 60px;
    height: 60px;
  }
  border: solid 1px lightgray;
  padding: 10px 10px 10px 10px;
  cursor: pointer;
  ${({selected}) => selected ? css `background-color: whitesmoke` : null}
  
  
`

export const Border = styled.div`
  background: linear-gradient(184.44deg, rgba(106, 179, 91, 0.9) -2.43%, rgba(87, 82, 179, 0.5) -2.42%, rgba(87, 82, 179, 0.75) 87.44%);
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  min-height: 60px;
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  
  @media screen and (max-width: 500px){
    max-width: 100px;
    min-width: 100px;

  }

`

export const ProductsWrapper = styled.div`
  background: #FFFFFF;
  box-shadow: 6px 6px 25px rgba(0, 0, 0, 0.1);
  padding: 25px;
  border-radius: 15px;
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  position: relative;
  min-height: 250px;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 50px;
  margin-left: 20%;


  @media screen and (max-width: 1400px){
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
  }
  @media screen and (max-width: 750px) {
    
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 0;
  }
`


export const InputContainer = styled.div`
  width: 33%;
  transition: none;
`
export const ProductsVegan = styled(ProductsWrapper)`
  flex-direction: row;
  
  @media screen and (max-width: 1400px) {
    width: 60%;
    display: grid;
    grid-template-columns: repeat(3,minmax(0,1fr));
    gap: 10px;
    padding: 20px;
    align-items: center;
    align-content: center;
  }
  
  & > svg {
    width: 100px;
    height: 100px;
  }
  @media screen and (max-width: 750px) {

    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 0;
  }

`

export const ContainerWrapper = styled.div`
  display: flex;
  width: 80%;
  margin-bottom: 2%;
  flex-direction: column;
  gap: 30px;
`

export const ContainerVegan = styled(ContainerWrapper)`
  transition: transform .2s;

  @media (hover: hover) {

    div>div:hover {
      transform: scale(1.2);
    }
  }
`

export const ProductsContainer = styled.div`
  width: 90%;
  border: 1px solid ${mainTheme.colors.secondaryColor};
  padding: 24px;
  border-radius: 5px;

`

export const SearchContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-end;
`
export const Search = styled.div`
  width: 30%;
`

