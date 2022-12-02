import styled from "styled-components";
import { mainTheme } from "../../../../themes/mainTheme";

export const Contanier = styled.div`
    width: 33rem;
    position: relative;

    @media screen and (max-width: 620px) {
        width: 100vw;
        padding: 0 2rem;
    }

    @media screen and (max-width: 520px) {
        width: 100vw;
        padding: 0 2rem;
    }
`;

export const CloseContainer = styled.div`
    position: absolute;
    top: 18px;
    right: 18px;

    @media screen and (max-width: 620px) {
        right: 45px;
    }
`;

export const Content = styled.div`
    padding: 3rem 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    border: 1px solid ${mainTheme.colors.grey};
    border-radius: 15px;
    background-color: white;
    box-sizing: border-box;

    @media screen and (max-width: 480px) {
        padding: 3rem 3rem 2rem 3rem;
    }
`;
