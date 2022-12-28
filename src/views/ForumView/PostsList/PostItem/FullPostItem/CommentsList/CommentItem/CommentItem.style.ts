import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  min-height: 200px;
`

export const Header = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  padding: 15px;
  justify-content: space-evenly;
  
  img {
    width: 40px;
  }
`

export const Description = styled.div`
  display: flex;
  align-items: start;
  padding: 10px;
  width: 90%;
  margin: 15px;
  min-height: 50px;
`

export const Footer = styled(Header)`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  width: 100px;
  padding-left: 15px;
  & > svg {
    filter: brightness(0%);
  }
`;