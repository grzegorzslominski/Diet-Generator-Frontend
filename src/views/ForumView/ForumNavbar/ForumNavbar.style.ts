import styled from "styled-components";

export const Container = styled.div`
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
    border-radius: 10px;
    width: 250px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    @media screen and (max-width: 680px) {
        width: 100px;
        border-radius: 8px;
        span {
            font-size: 16px;
        }
    }
`;
