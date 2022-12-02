import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background-color: white;
  min-height: 110px;
  margin: -20px 0 20px 0;
  border-radius: 0.5rem;
  z-index: 0;

`

export const Author = styled.div`
  display: flex;
  flex-direction: column;
`

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(263.17deg, rgba(78, 75, 119, 0.8) -118.34%, #6D5E9D -1.83%, rgba(244, 75, 66, 0.7) 95.09%, rgba(240, 88, 64, 0.8) 221.67%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 3rem;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-top: 40px;
`