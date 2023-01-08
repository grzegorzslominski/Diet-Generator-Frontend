import styled from "styled-components";
import { mainTheme } from "../../../../themes/mainTheme";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
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
`;

export const NewsSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const NotesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const NoteContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
    gap: 20px;
    border: 1px solid ${mainTheme.colors.secondaryColor};
    border-radius: 5px;
`;

export const NoteHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const NoteArticleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 0 24px;
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
`;
