import styled from "styled-components";
import { mainTheme } from "../../../../themes/mainTheme";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;

    & > span:first-child {
        padding-left: 12px;
    }
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 36px;
    padding: 6px 0 6px 6px;

    @media screen and (max-width: 760px) {
        padding: 0;
    }
`;

export const NewsSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media screen and (max-width: 760px) {
        gap: 12px;
    }
`;

export const NotesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 36px;
`;

export const NoteContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
    gap: 20px;
    border: 1px solid ${mainTheme.colors.secondaryColor};
    border-radius: 5px;

    @media screen and (max-width: 760px) {
        padding: 12px;
    }
`;

export const NoteHeader = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 760px) {
        flex-direction: column;
        gap: 12px;

        span {
            font-size: 14px;
        }
    }
`;

export const NoteArticleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 0 24px;

    @media screen and (max-width: 760px) {
        padding: 6px;
    }
`;

export const NoteContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const NoteContentList = styled.ul`
    margin: 0;

    & > li:not(:first-child) {
        padding-top: 6px;
    }

    & > li {
        ::marker {
            font-size: 12px;
        }
    }

    @media screen and (max-width: 760px) {
        padding-left: 24px;
    }
`;
