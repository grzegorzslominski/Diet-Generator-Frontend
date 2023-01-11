import { mainTheme } from "../../../../themes/mainTheme";
import { Creator, NEW_CREATORS } from "./const/creatorsData";

import RedirectButton from "../../../../components/UI/RedirectButton/RedirectButton";
import Carousel from "../../../../components/UI/Carousel/Carousel";
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

            <Carousel widthElement={270} version='dots' gap={35} scrollAxie='vertical'>
                {NEW_CREATORS.map((creator: Creator) => (
                    <BoxPad width='100%' padding='24px' key={creator.id}>
                        <S.CreatorCard>
                            <S.ProfileAvatar backgroundIMG={creator.avatarIMG}></S.ProfileAvatar>
                            <S.RightSection>
                                <S.TitleWrapper>
                                    <Label
                                        fontFamily='Lato'
                                        fontWeight='700'
                                        fontSize='24px'
                                        lineHeight='24px'
                                        color={mainTheme.colors.mainBlack}
                                    >
                                        {`${creator.firstName} ${creator.lastName}`}
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
                                        {creator.description}
                                    </Label>
                                </S.Description>
                                <S.TagsContainer>
                                    {creator.tags.map((tag) => (
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
                                    <Social iconSize='20px' social={creator.socials} />
                                    <RedirectButton
                                        label='See profile'
                                        arrowIcon={false}
                                        onClick={() => {}}
                                    />
                                </S.ActionWrapper>
                            </S.RightSection>
                        </S.CreatorCard>
                    </BoxPad>
                ))}
            </Carousel>
        </S.Container>
    );
};

export default NewCreator;
