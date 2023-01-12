import styled from "styled-components";
import mainBackgroudn from "../../../../../assets/mainBackground.png"

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
  }
`

export const FfirstItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100px;
  justify-content: space-between;
  
`

export const ClosingContainer = styled.div`
  position: absolute;
  right: 15px;
`