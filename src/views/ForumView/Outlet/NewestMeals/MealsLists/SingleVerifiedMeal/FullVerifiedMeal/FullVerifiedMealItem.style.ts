import styled, { css } from "styled-components";
import mainBackgroudn from "../../../../../../../assets/mainBackground.png"

export const Container = styled.div`
  width: 1000px;
  background: url(${mainBackgroudn});
  border: solid black 1px;
  border-radius: 10px;
  height: 700px;
  display: flex;
  flex-direction: column;
  gap:20px;
  position: relative;
  align-items: center;
  padding: 25px;
  overflow-y: auto;


  @media screen and (max-width: 1050px){
    width: 600px;
    transform: translateX(-10%) translateY(-10%);
  }
  @media screen and (max-width: 700px){
    width: 375px;
    transform: translateX(-20%) translateY(-20%);
  }
`

export const Header = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: center;
  gap: 15px;

  img {
    width: 40px;
  }
  @media screen and (max-width: 700px){
    flex-direction: column;
  }
`

export const Post = styled.div`
  box-shadow: 6px 6px 25px rgba(0, 0, 0, 0.1);
  position: relative;
  background: #FFFFFF;
  border-radius: 10px;
  width: 80%;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  min-height: auto;
  
  img {
    width: 150px;
  }
`

export const Comments = styled(Post)``

export const Footer = styled.div`
  position: relative;
  width: 100%;
  padding: 0 10% 0 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  & > svg {
    filter: brightness(0%);
    cursor: pointer;
    width: 20px;
    height: 20px;
  }
`

export const FfirstItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100px;
  justify-content: space-between;

`

export const LabelContainer = styled.div`
  display: flex;
  justify-content: start;
  width: 80%;
`

export const Ingredient = styled.div`
  display: flex;
  width: 80%;
  justify-content: start;
  align-items: center;
  gap:20px;
  
`


export const ClosingContainer = styled.div`
  position: absolute;
  right: 15px;
`

export const Table = styled.div`
  display: flex;
  border: dashed black 1px;
  padding: 5px;
  width: 80%;
  justify-content: space-evenly;
  align-items: center;
`

export const Servings = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

export const TableUnits = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`