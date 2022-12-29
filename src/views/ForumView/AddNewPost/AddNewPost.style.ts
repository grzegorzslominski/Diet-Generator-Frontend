import styled from "styled-components";
import mainBackgroudn from "../../../assets/mainBackground.png"

export const Container = styled.div`
  width: 1000px;
  background: url(${mainBackgroudn});
  border: solid black 1px;
  border-radius: 10px;
  height: 700px;
  display: flex;
  flex-direction: column;
  gap:20px;
  position: relative;
  align-items: center;
  padding: 25px;
`

export const ClosingContainer = styled.div`
  position: absolute;
  right: 15px;
`

export const Post = styled.div`
  box-shadow: 6px 6px 25px rgba(0, 0, 0, 0.1);
  position: relative;
  background: #FFFFFF;
  border-radius: 10px;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  min-height: auto;
`