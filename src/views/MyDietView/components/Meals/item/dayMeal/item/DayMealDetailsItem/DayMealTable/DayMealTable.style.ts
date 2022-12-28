import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
  
`

export const Table = styled.div`
  display: flex;
  border: dashed black 1px;
  padding: 5px;
  width: 450px;
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