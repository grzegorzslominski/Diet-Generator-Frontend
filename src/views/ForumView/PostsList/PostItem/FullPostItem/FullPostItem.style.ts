import styled from "styled-components";
import mainBackgroudn from "../../../../../assets/mainBackground.png"

export const Container = styled.div`
  width: 800px;
  background: url(${mainBackgroudn});
  border: solid black 1px;
  border-radius: 10px;
  height: 800px;
  display: flex;
  flex-direction: column;
  gap:20px;
  position: relative;
  align-items: center;
  padding: 25px;
  overflow-y: auto;
`

export const Header = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: space-evenly;
  
  img {
    width: 40px;
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
  padding: 5px;
  min-height: auto;
`

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
  }
`

export const FfirstItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100px;
  justify-content: space-between;

  
`