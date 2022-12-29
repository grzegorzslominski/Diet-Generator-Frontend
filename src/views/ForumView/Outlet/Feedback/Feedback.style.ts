import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

  @media screen and (max-width: 900px){
    flex-direction: column-reverse;
    align-items: center;
    gap: 20px;
  }
`;

export const Posts = styled.div`
    display: flex;
    flex-direction: column;
    width: 800px;

  @media screen and (max-width: 900px){
    align-items: center;
  }
`;

