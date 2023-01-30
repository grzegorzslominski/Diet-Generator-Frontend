import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
    width: 1000px;

    @media screen and (max-width: 1220px) {
        width: 620px;
    }

    @media screen and (max-width: 860px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        display: flex;
        width: 320px;
    }
`;
