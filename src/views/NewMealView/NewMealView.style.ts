import styled, { css } from "styled-components";
import mainBackgroudn from "../../assets/mainBackground.png";

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

export const ItemContainer = styled.div`

`

export const Border = styled.div`
  background: #FFFFFF;
  box-shadow: 6px 6px 25px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 1100px;
  min-height: 800px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  justify-content: space-evenly;
`

export const InputContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

`

export const InputRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 25px;
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