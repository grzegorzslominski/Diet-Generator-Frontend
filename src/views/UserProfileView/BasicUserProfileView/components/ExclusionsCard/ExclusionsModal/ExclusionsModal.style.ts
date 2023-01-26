import styled from "styled-components";

export const Container = styled.div`
    width: 480px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 820px) {
        max-width: 320px;
    }
`;
