import styled from "styled-components";


export const Container = styled.div`
  width: 80%;
`
export const LabelContainer = styled.div`
  margin-right: auto;
  margin-top: 2%;
`

export const ItemContainer = styled.div`
  display: inline-flex;

`

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 1720px){
    display: grid;
    grid-template-columns: repeat(3,auto);
    justify-content: center;
    gap: 10px;
  }

  @media screen and (max-width: 1050px){
    display: grid;
    grid-template-columns: repeat(2,auto);
    justify-content: center;
    gap: 10px;
  }
  @media screen and (max-width: 700px){
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
`