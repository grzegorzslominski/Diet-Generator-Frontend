import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 12px;

    & > div:last-child {
        margin-top: 4px;
        height: 32px;
    }
`;
