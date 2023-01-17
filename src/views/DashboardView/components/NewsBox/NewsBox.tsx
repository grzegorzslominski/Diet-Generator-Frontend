import { mainTheme } from "../../../../themes/mainTheme";
import { DEV_NOTE } from "./const/note";

import ScrollBox from "../../../../components/UI/ScrollBox/ScrollBox";
import BoxPad from "../../../../components/UI/BoxPad/BoxPad";
import Label from "../../../../components/UI/Label/Label";

import * as S from "./NewsBox.style";

const NewsBox = () => {
    return (
        <S.Container>
            <Label
                fontFamily='Lato'
                fontWeight='600'
                fontSize='24px'
                color={mainTheme.colors.mainBlack}
            >
                News
            </Label>
            <BoxPad width='100%' padding='18px 12px 28px 18px'>
                <S.Content>
                    <S.NewsSection>
                        <Label fontSize='18px' fontWeight='500' color={mainTheme.colors.mainBlack}>
                            Developers note
                        </Label>
                        <ScrollBox scrollDistance={40} height={270} mobileScrollDistance={30}>
                            <S.NotesContainer>
                                {DEV_NOTE.map((note) => {
                                    return (
                                        <S.NoteContainer key={note.title}>
                                            <S.NoteHeader>
                                                <Label
                                                    fontWeight='500'
                                                    fontSize='16px'
                                                    color={mainTheme.colors.mainBlack}
                                                >
                                                    {note.title}
                                                </Label>
                                                <Label
                                                    fontWeight='500'
                                                    fontSize='16px'
                                                    color={mainTheme.colors.mainBlack}
                                                >
                                                    {note.date}
                                                </Label>
                                            </S.NoteHeader>
                                            <S.NoteArticleContainer>
                                                {note.content.map((noteContent) => (
                                                    <S.NoteContent key={noteContent.title}>
                                                        <Label fontSize='13px' fontWeight='500'>
                                                            {noteContent.title}
                                                        </Label>
                                                        <S.NoteContentList>
                                                            {noteContent.notePoints.map(
                                                                (notePoint, index) => (
                                                                    <li key={index}>
                                                                        <Label fontSize='12px'>
                                                                            {notePoint}
                                                                        </Label>
                                                                    </li>
                                                                ),
                                                            )}
                                                        </S.NoteContentList>
                                                    </S.NoteContent>
                                                ))}
                                            </S.NoteArticleContainer>
                                        </S.NoteContainer>
                                    );
                                })}
                            </S.NotesContainer>
                        </ScrollBox>
                    </S.NewsSection>
                </S.Content>
            </BoxPad>
        </S.Container>
    );
};

export default NewsBox;
