import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column; 
  margin-top: 20px;
  gap: 20px;  width: 300px;


`
export const Container = styled.div`
  padding: 15px;
  background: #FFFFFF;
  box-shadow: 6px 6px 25px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`

export const Container2 = styled(Container)`
  align-items: center;
`

export const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    img {
        width: 40px;
    }
`

export const MiddleSection = styled.div`
    min-height: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Description = styled.div`

    min-height: 160px;
    max-height: 160px;
    text-overflow: ellipsis;
    overflow: hidden;
`
export const IconContainer = styled.div`
    display: flex;
    width: 40%;
    align-items: center;
    justify-content: space-evenly;

    & > svg {
        filter: brightness(0%);
        height: 20px;
        width: 30px;
    }
`

export const Footer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;

`