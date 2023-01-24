import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 50px 20px 50px;
  background: linear-gradient(184.44deg, rgba(106, 179, 91, 0.9) -2.43%, rgba(87, 82, 179, 0.5) -2.42%, rgba(87, 82, 179, 0.75) 87.44%);
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  min-height: 120px;
`

export const Content = styled.div`
  display: flex;
  margin: 10px 20px 10px 20px;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  
  img {
    width: 75px;
  }
  @media screen and (max-width: 870px){
    flex-direction: column;
  }
`

export const SecondItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100px;
  
`

export const LabelsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 870px){
    align-items: center;
  }
  
`

export const SecondItemsContent = styled.div`
  display: flex;
  gap: 1rem;
  
  @media screen and (max-width: 870px) {
    gap: 5px;
  }
  
`
export const ThirdAndForthContent = styled.div`
  display: flex;
  gap: 10px;
  
  @media screen and (max-width: 870px){
    margin-top: 10px;
    gap: 0;
    flex-direction: row-reverse;
    width: 100%;
    justify-content: space-evenly;
  }
`
export const SecondSingleItem = styled.div`
  background: #FFFFFF;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
  width: 50px;
  height: 50px;
  padding: 5px 5px 5px 5px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
`

export const FooterColor = styled.div`
  align-items: flex-end;
  border-radius: 0 0 10px 10px;
  width: 100%;
  height: 10%;

`

export const FooterCalories = styled(FooterColor)`
  background: #CAB25E;

`
export const FooterProteins = styled(FooterColor)`
  background: #38662F;

`
export const FooterCarbs = styled(FooterColor)`
  background: #E6B19C;

`
export const FooterFat = styled(FooterColor)`
  background: #919AE6;

`
export const ThirdItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100px;

`

export const ThirdItemUl = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  margin-left: -20px;

`
export const ThirdItemLi = styled.li`
  color: white;

`

export const FourthContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: space-between;

  @media screen and (max-width: 870px){
    margin-top: -10px;
    flex-direction: row;
    height: 50px;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
  }


`

export const FourthContainerItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  &>svg {
    cursor: pointer;
    height: 20px;
    width: 20px;
  }
`

