import styled from "styled-components";


export const Container = styled.div`
  width: 80%;
`
export const LabelContainer = styled.div`
  margin-right: auto;
  margin-top: 2%;
  @media screen and (max-width: 1720px){
    margin: 5% 0 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

`

export const ItemContainer = styled.div`
  display: inline-flex;

`

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 1820px){
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