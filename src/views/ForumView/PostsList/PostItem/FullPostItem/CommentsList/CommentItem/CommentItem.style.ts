import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 10px;
    flex-direction: column;
    min-height: 200px;
`;

export const Header = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 15px;

    img {
        width: 40px;
    }
`;

export const Description = styled.div`
    display: flex;
    align-items: start;
    padding: 10px;
    width: 90%;
    min-height: 50px;
`;
