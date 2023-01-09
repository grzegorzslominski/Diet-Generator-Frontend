import { Article } from "../../const/expendedUser";
import { mainTheme } from "../../../../../themes/mainTheme";

import Label from "../../../../../components/UI/Label/Label";
import BoxPad from "../../../../../components/UI/BoxPad/BoxPad";
import RedirectButton from "../../../../../components/UI/RedirectButton/RedirectButton";

import * as S from "./ProfileArticlestyle";

const ProfileArticle = ({ header, content, image, author, id }: Article) => {
    return (
        <BoxPad>
            <S.Container>
                <img src={image} alt={`Article: ${header}`} />
                <S.ContentWrapper>
                    <S.Content>
                        <Label
                            fontFamily='Lato'
                            fontSize='20px'
                            fontWeight='600'
                            color={mainTheme.colors.mainBlack}
                        >
                            {header}
                        </Label>
                        <Label fontSize='14px' color={mainTheme.colors.inputText}>
                            {content}
                        </Label>
                    </S.Content>
                    <S.ActionContainer>
                        <Label fontSize='16px' fontWeight='600' color={mainTheme.colors.mainBlack}>
                            {author}
                        </Label>
                        <RedirectButton label='Read full article' onClick={() => {}} />
                    </S.ActionContainer>
                </S.ContentWrapper>
            </S.Container>
        </BoxPad>
    );
};

export default ProfileArticle;
