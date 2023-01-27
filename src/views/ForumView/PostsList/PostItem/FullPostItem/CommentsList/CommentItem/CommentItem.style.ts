import { mainTheme } from "./../../../../../../../themes/mainTheme";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 10px;
    flex-direction: column;
    min-height: 80px;
    border-top: solid 1px rgba(230, 225, 225);
`;

export const Header = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 15px;

    img {
        width: 65px;
        height: 60px;
        object-fit: cover;
        object-position: center;
        border-radius: 50%;
    }
`;

export const Description = styled.div`
    display: flex;
    align-items: start;
    padding: 10px;
    width: 90%;
    min-height: 50px;
`;
