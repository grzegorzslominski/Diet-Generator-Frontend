import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  box-sizing: border-box;
  border: 1px solid #737380;
  border-radius: 35px;
  width: 35.5rem;
  height: 50.5rem;
  display: flex;
  flex-direction: column;
  background-color: white;
`

export const ButtonStyled = styled.div`
    font-family: Lato,serif;
    font-weight: 700;
    size: 1rem;
    line-height: 1.3rem;
    margin: 1rem auto;
    cursor: pointer;
    background: linear-gradient(263.17deg, rgba(78, 75, 119, 0.8) -118.34%, #6D5E9D -1.83%, rgba(244, 75, 66, 0.7) 95.09%, rgba(240, 88, 64, 0.8) 221.67%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`

export const LoginButton = styled.div`
  cursor: pointer;
  margin: 10% auto 5% auto;
  background: linear-gradient(263.17deg, rgba(78, 75, 119, 0.8) -118.34%, #6D5E9D -1.83%, rgba(244, 75, 66, 0.7) 95.09%, rgba(240, 88, 64, 0.8) 221.67%);
  border-radius: 2.81rem;
  padding: 1rem 5rem 1rem 5rem;
`

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 10% 0 10%;
    input {
      border: 0;
      border-bottom: 2px solid #C5C5C5;
      margin-top: 0.5rem;
    }
  input:focus{
    outline: none;
  }
`

export const H1Styled = styled.div`
  margin: 10% auto;
`

export const H2Styled = styled.div`
  margin: 5% auto;
`

export const LoginElement = styled(LoginContainer)`
    padding: 0;
    margin-top: 2rem;
`
export const Icons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin: 1.5rem auto 1.5rem auto;
`
export const ImageContainer = styled.div`
  img {
    height: 2.5rem;
    cursor: pointer;
  }
`
