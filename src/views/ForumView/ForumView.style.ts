import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    position: relative;
    background-size: cover;
    align-items: center;
    margin: 50px 0 50px 0;
`;

export const Header = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
`

export const HeaderItem = styled.div`
  background: #FFFFFF;
  box-shadow: 6px 6px 25px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 250px;
  height: 175px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &:hover {
    border: solid black 1px;
  }
`

export const MiddleSection = styled.div`
  margin: 50px 0 50px 0;
  width: 60%;
  gap: 25px;
  display: flex;
  flex-direction: column;
  span {
    align-items: start;
  }
`
export const MiddleSectionWrapper = styled.div`
   display: flex;
   width:100%;
    gap: 50px;


`
export const Posts = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
`

export const RightSection = styled.div`
  margin-top: 20px;
  width: 300px;
  background: #FFFFFF;
  box-shadow: 6px 6px 25px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  max-height: 400px;
`
