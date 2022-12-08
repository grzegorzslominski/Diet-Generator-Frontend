import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`
export const Container = styled.div`
  position: relative;
  margin-top: 60px;
  width: 260px;
  height: 380px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(184.44deg, rgba(106, 179, 91, 0.9) -2.43%, rgba(87, 82, 179, 0.5) -2.42%, rgba(87, 82, 179, 0.75) 87.44%);
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  z-index: 1;
  padding: 0 20px 0 20px;


`

export const TopSection = styled.div`
  position: absolute;
  top: 5%;
  left: 50%;
  gap: 1rem;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  height: 3rem;
  padding-left: 5px;
  padding-right: 5px;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  img {
    height: 90px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -50px;

  }
  &>svg{
    min-width: 30px;
    min-height: 45px;
  }
  
`
export const Border = styled.div`
  border: solid white 2px;
  border-radius: 0.5rem;
  height: 45px; 
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NewBorder = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  height: 45px;
  width: 45px;
`

export const MiddleSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`

export const Content = styled.ul`
  display: grid;
  grid-template-columns: repeat(3,auto);
  justify-content: space-between ;
  padding: 0 20px 0 20px;
  margin: 20px 0 20px 0;

`

export const TextContent = styled.div`
  margin: 10px 10px 10px 10px;
  text-overflow: ellipsis;
  width: 220px;
  overflow: hidden;
  max-height: 110px;
  white-space: nowrap;
`

export const ContentItem = styled.li`
  color: white;
`

export const TitleContainer = styled.div`
  padding-top: 80px;
  text-align: center;
`

export const BottomSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

`

export const BottomItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`
export const BottomSingleItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

export const Footer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 0.7rem;
    padding-left: 5px;
  }
  cursor: pointer;
  z-index: 1;
`