import styled, {css} from "styled-components";

export const Container = styled.div`
  background: #FFFFFF;
  border-radius: 15px;
  width: 500px;
  height: 650px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  z-index: 10;
`

export const ImageContainer = styled.div`
  
  img {
    width: 100px;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:5px;
`

export const Table = styled.div`
  display: flex;
  width: 100%;
`

export const TableItem = styled.div`
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 10px 20px 10px;
  align-items: center;
  height: 150px;
  overflow: scroll;
  overflow-x: hidden;
`

export const Items = styled.ul`
  all: unset;
  padding-top: 10px;
`

export const Item = styled.li`
  display: flex;
  flex-direction: column;
`

export const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px
`

export const Row = styled.div`
  display:flex;
  padding:10px 15px 10px 0px;
  justify-content: space-between;
  align-items: center;

`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  max-height: 400px;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 10px 0 10px 0;
  gap:10px;
  overflow-y: scroll;
`

export const IconTable = styled.div`
  position: absolute;
  display: flex;
  gap: 5px;
  bottom: 15px;
  right: 15px;
  img {
    width: 10px;
  }
  
  & > svg {
    width: 30px;
    height: 25px;
    filter: brightness(0%);
  }
  
`

export const ClosingContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`