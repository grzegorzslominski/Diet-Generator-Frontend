import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding-bottom: 3rem;
    display: flex;
    flex-direction: column;
    gap: 6rem;

    @media screen and (max-width: 420px) {
        gap: 4rem;
    }
`;
