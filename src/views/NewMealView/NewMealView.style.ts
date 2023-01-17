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
    justify-content: center;
`;

export const Border = styled.div`
  background: #FFFFFF;
  box-shadow: 6px 6px 25px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 1100px;
  min-height: 1000px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  justify-content: space-evenly;
  gap: 20px;
`

export const InputContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

export const InputRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2,auto);
  column-gap: 30px;
  row-gap: 20px;
`

export const Table = styled.div`
  display: flex;
  border: dashed black 1px;
  padding: 5px;
  width: 80%;
  justify-content: space-evenly;
  align-items: center;

`
interface prop {
  isOpen: boolean;
}
export const TableItem = styled.div<prop>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 20px;
    ${({isOpen}) => isOpen ? css `
      filter: invert(62%) sepia(94%) saturate(3584%) hue-rotate(85deg) brightness(119%) contrast(126%);
    ` : css`
      filter: invert(18%) sepia(94%) saturate(6357%) hue-rotate(2deg) brightness(91%) contrast(125%);
    ` }

  }
`

export const ProductsContainer = styled.div`
  width: 80%;
  border: 1px solid ${mainTheme.colors.secondaryColor};
  padding: 24px;
  border-radius: 5px;


`

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(5,120px);
  width: 100%;
  justify-content: center;
  gap: 20px;
`

export const productItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: 1px solid ${mainTheme.colors.secondaryColor};
  
  cursor: pointer;


  :hover {
    
  }

`