import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    position: relative;
    background-size: cover;
    align-items: center;
`;

export const Header = styled.div`
    display: flex;
    flex-wrap: warp;
    width: 1100px;
    gap: 190px;
    @media screen and (max-width: 1250px) {
        width: 530px;
        display: grid;
        grid-template-columns: repeat(2, auto);
        justify-content: space-evenly;
        gap: 20px;
    }

    @media screen and (max-width: 535px) {
        width: 300px;
    }
`;

export const HeaderItem = styled.div`
    background: #ffffff;
    box-shadow: 6px 6px 25px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    width: 250px;
    height: 105px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    @media screen and (max-width: 535px) {
        width: 120px;
        height: 120px;
    }
`;

export const MiddleSection = styled.div`
    margin: 50px 0 50px 0;
    width: 1100px;
    gap: 25px;
    display: flex;
    flex-direction: column;
    span {
        align-items: start;
    }
    position: relative;

    @media screen and (max-width: 1250px) {
        width: 800px;
        align-items: center;
    }

    @media screen and (max-width: 535px) {
        width: 350px;
    }
`;

export const Posts = styled.div`
    display: flex;
    flex-direction: column;
    width: 800px;
`;
