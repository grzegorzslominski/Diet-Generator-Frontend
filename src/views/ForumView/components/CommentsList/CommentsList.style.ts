import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
`;

export const EmptyContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Comments = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    & > div:not(:last-child) {
        ::before {
            position: absolute;
            bottom: 0;
            left: 0;
            content: "";
            height: 1px;
            width: 100%;
            background: #cfd0d1;
        }
    }
`;

export const Comment = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    position: relative;
    padding: 8px;
`;

export const CommentInfo = styled.div`
    display: flex;
    justify-content: space-between;
`;
