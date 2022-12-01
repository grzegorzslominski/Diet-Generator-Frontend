import styled from "styled-components";
import mainBackgroudn from "../../assets/mainBackground.png";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    position: relative;
    background-size: cover;
    background: url(${mainBackgroudn});
    align-items: center;
    margin: 50px 0 50px 0;
`;

export const ButtonContainer = styled.button`
  all: unset;
  cursor: pointer;
  background: linear-gradient(184.44deg, rgba(106, 179, 91, 0.9) -2.43%, rgba(87, 82, 179, 0.5) -2.42%, rgba(87, 82, 179, 0.75) 87.44%);
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  min-width: 200px;
  min-height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
`