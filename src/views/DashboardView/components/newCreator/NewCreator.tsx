import { mainTheme } from "../../../../themes/mainTheme";
import { NEW_CREATORS } from "./const/creatorsData";

import RedirectButton from "../../../../components/UI/RedirectButton/RedirectButton";
import BoxPad from "../../../../components/UI/BoxPad/BoxPad";
import Social from "../../../../components/Socials/Socials";
import Label from "../../../../components/UI/Label/Label";

import * as S from "./NewCreator.style";

const NewCreator = () => {
    return (
        <S.Container>
            <Label
                fontFamily='Lato'
                fontWeight='600'
                fontSize='24px'
                color={mainTheme.colors.mainBlack}
            >
                New creators on the platform
            </Label>

            <BoxPad width='100%' padding='24px'>
                <S.CreatorCard>
                    <S.ProfileAvatar backgroundIMG={NEW_CREATORS[0].avatarIMG}></S.ProfileAvatar>
                    <S.RightSection>
                        <S.TitleWrapper>
                            <Label
                                fontFamily='Lato'
                                fontWeight='700'
                                fontSize='24px'
                                lineHeight='24px'
                                color={mainTheme.colors.mainBlack}
                            >
                                {`${NEW_CREATORS[0].firstName} ${NEW_CREATORS[0].lastName}`}
                            </Label>
                            <Label
                                fontFamily='Lato'
                                fontWeight='700'
                                fontSize='14px'
                                color={mainTheme.colors.mainBlack}
                            >
                                Personal trainer
                            </Label>
                        </S.TitleWrapper>
                        <S.Description>
                            <Label
                                fontFamily='Lato'
                                fontSize='13px'
                                color={mainTheme.colors.mainBlack}
                            >
                                Lucy has been involved in helping others train in the gym for ten
                                years. She helped achieve the goals set by her charges and now she
                                wants to share her knowledge with Foodie users.
                            </Label>
                        </S.Description>
                        <S.TagsContainer>
                            {NEW_CREATORS[0].tags.map((tag) => (
                                <S.Tag key={tag}>
                                    <Label
                                        fontWeight='600'
                                        fontSize='12px'
                                        lineHeight='12px'
                                        color={mainTheme.colors.mainBlack}
                                    >
                                        {tag}
                                    </Label>
                                </S.Tag>
                            ))}
                        </S.TagsContainer>
                        <S.ActionWrapper>
                            <Social iconSize='20px' social={NEW_CREATORS[0].socials} />
                            <RedirectButton
                                label='See profile'
                                arrowIcon={false}
                                onClick={() => {}}
                            />
                        </S.ActionWrapper>
                    </S.RightSection>
                </S.CreatorCard>
            </BoxPad>
        </S.Container>
    );
};

export default NewCreator;
