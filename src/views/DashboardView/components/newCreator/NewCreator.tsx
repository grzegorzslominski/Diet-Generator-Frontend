import { useNavigate } from "react-router-dom";

import { mainTheme } from "../../../../themes/mainTheme";
import noPhoto from "../../../../assets/no-photo.png";

import RedirectButton from "../../../../components/UI/RedirectButton/RedirectButton";
import Carousel from "../../../../components/UI/Carousel/Carousel";
import BoxPad from "../../../../components/UI/BoxPad/BoxPad";
import Social from "../../../../components/Socials/Socials";
import Label from "../../../../components/UI/Label/Label";

import { PublicUserProfile } from "../../../../models/User/ExpandedUser";

import * as S from "./NewCreator.style";
import { NAVIGATION } from "../../../../navigation/paths";

type NewCreatorProps = {
    creators: PublicUserProfile[];
};

const NewCreator = ({ creators }: NewCreatorProps) => {
    const navigate = useNavigate();

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
            <S.ContentWrapper>
                <Carousel
                    widthElement={270}
                    version='dots'
                    gap={35}
                    scrollAxie='vertical'
                    maxHeight='374px'
                >
                    {creators.map((creator: PublicUserProfile) => (
                        <BoxPad width='100%' padding='24px' key={creator.user.id} boxShadow={false}>
                            <S.CreatorCard>
                                <S.ProfileAvatar
                                    backgroundIMG={
                                        creator.userImagePath ? creator.userImagePath : noPhoto
                                    }
                                ></S.ProfileAvatar>
                                <S.RightSection>
                                    <S.TitleWrapper>
                                        <Label
                                            fontFamily='Lato'
                                            fontWeight='700'
                                            fontSize='24px'
                                            lineHeight='24px'
                                            color={mainTheme.colors.mainBlack}
                                        >
                                            {`${creator.user.firstName} ${creator.user.firstName}`}
                                        </Label>
                                        <Label
                                            fontFamily='Lato'
                                            fontWeight='700'
                                            fontSize='14px'
                                            color={mainTheme.colors.mainBlack}
                                        >
                                            {creator.userExtras?.profession
                                                ? creator.userExtras.profession
                                                : "-"}
                                        </Label>
                                    </S.TitleWrapper>
                                    <S.Description>
                                        <Label
                                            fontFamily='Lato'
                                            fontSize='13px'
                                            color={mainTheme.colors.mainBlack}
                                        >
                                            {creator.userExtras?.about_me
                                                ? creator.userExtras.about_me
                                                : "-"}
                                        </Label>
                                    </S.Description>
                                    {/* <S.TagsContainer>
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
                                    </S.TagsContainer> */}
                                    <S.ActionWrapper>
                                        <Social iconSize='20px' social={creator?.socials} />
                                        <RedirectButton
                                            label='See profile'
                                            arrowIcon={false}
                                            onClick={() =>
                                                navigate(`${NAVIGATION.profile}/${creator.user.id}`)
                                            }
                                        />
                                    </S.ActionWrapper>
                                </S.RightSection>
                            </S.CreatorCard>
                        </BoxPad>
                    ))}
                </Carousel>
            </S.ContentWrapper>
        </S.Container>
    );
};

export default NewCreator;
