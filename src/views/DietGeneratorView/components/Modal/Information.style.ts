import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 6px 6px 25px rgba(0, 0, 0, 0.1);
  position: relative;
  background: #FFFFFF;
  border-radius: 10px;
  width: 500px;
  height: 200px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  align-items: center;
  width: 400px;
`

export const ClosingContainer = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
`
