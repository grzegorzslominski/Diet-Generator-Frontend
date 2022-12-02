import styled from "styled-components";
import Label from "../../../../components/UI/Label/Label";

export const Container = styled.div`
    background-color: #ffffff;
    width: 40rem;
    height: 31rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    padding: 5% 5% 5% 5%;
    margin-top: 2%;
`;

export const RightSection = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Description = styled.div`
    width: 70%;
    min-height: 20vh;
    margin: 7% 0 7% 0;
`;

export const Icon = styled.div`
    border: 2px solid;
    border-image: linear-gradient(#4e4b77, #6d5e9d, #f44b42, #f05840) 1 round;
    text-align: center;
    width: 33%;
    border-radius: 50%;
`;

export const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    gap: 1rem;
    align-items: center;
    margin: 3% 0 3% 0;
    img {
        cursor: pointer;
    }
`;

export const ImageContainer = styled.div`
    img {
        height: 1.5rem;
    }
`;

export const Button = styled.div`
    cursor: pointer;
    margin-left: auto;
`;
