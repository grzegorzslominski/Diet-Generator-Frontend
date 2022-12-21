import styled from "styled-components";

export const Container = styled.div`
  width: 800px;
  background: #FFFFFF;
  box-shadow: 6px 6px 25px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  height: 500px;
  display: flex;
  flex-direction: column;
  position: relative;
  
  &:hover {
    border: solid black 1px;
  }
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

export const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0 10px 0;
`

export const Description = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 325px;
  text-overflow: ellipsis;
  overflow: hidden;
  direction: rtl;
  text-align: left;
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
export const Footer = styled.div`
  position: relative;
  width: 100%;
  padding: 0 10% 0 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;

`

export const FfirstItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100px;
  justify-content: space-between;

  
`

export const FsecondItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-height: 40px;
  justify-content: center;


`