import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 10%;
    left: 0;
    padding: 16px 32px 16px 32px;
    display: flex;
    width: 5%;
    height: 100%;
    background: #48456D;
    color: #FFFFFF;
    justify-content: center;
  
  @media screen and (max-width: 870px){
    display: none;
  }
`;

export const NavItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
  
`

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
`

export const LabelContainer = styled.div`
  margin-top: 2rem;
  text-align: center;

`

