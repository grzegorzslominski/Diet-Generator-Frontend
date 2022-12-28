import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    gap: 24px;
    justify-content: space-between;
    align-items: center;

    & > div:last-child {
        min-width: 150px;
    }

    @media screen and (max-width: 860px) {
        flex-direction: column;
        align-items: flex-end;
        gap: 32px;
    }
`;
