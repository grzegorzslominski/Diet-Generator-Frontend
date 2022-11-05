import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 3rem 4rem 3rem;
  background-color: white;
  
`;

export const PStyled = styled.div`
    padding: 4rem 0 4rem 0;
`

export const GridContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  gap: 0.5rem;
  padding-top: 2rem;

`

export const GridElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  img {
    margin-bottom: 2rem;
  }
  ul {
    margin-top: 2rem;
  }
  
`

export const LineElement = styled.div`
  padding-top: 33%;

`

export const ImageContainer = styled.div`
  img {
    height: 7rem;
  }
`

