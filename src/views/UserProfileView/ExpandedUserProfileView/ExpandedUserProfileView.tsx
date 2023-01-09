import { EXPENDED_USER_DATA } from "./const/expendedUser";
import { ReactComponent as HeartIcon } from "../../../assets/icons/heart.svg";
import { mainTheme } from "../../../themes/mainTheme";

import ViewBox from "../../../components/UI/ViewBox/ViewBox";
import Label from "../../../components/UI/Label/Label";
import Carousel from "../../../components/UI/Carousel/Carousel";
import ProfileSection from "./components/SectionBox/SectionBox";
import MealItem from "../../DashboardView/components/Meals/item/MealItem";
import ProfileArticle from "./components/ProfileArticle/ProfileArticle";
import Social from "../../../components/Socials/Socials";

import * as S from "./ExpandedUserProfileView.style";

const ExpandedUserProfileView = () => {
    return (
        <ViewBox paddintTop={false}>
            <S.Container>
                <S.TopBackground backgroundIMG={EXPENDED_USER_DATA.backgroundIMG} />
                <S.Content>
                    <S.TopSection>
                        <S.MainDetails>
                            <S.UserAvatar avatarIMG={EXPENDED_USER_DATA.avatarIMG} />
                            <S.UserNameContanier>
                                <Label
                                    fontSize='24px'
                                    fontWeight='600'
                                    color={mainTheme.colors.mainBlack}
                                >
                                    {`${EXPENDED_USER_DATA.firstName} ${EXPENDED_USER_DATA.lastName}`}
                                </Label>
                                <Label
                                    fontSize='14px'
                                    fontWeight='600'
                                    color={mainTheme.colors.inputText}
                                >
                                    {EXPENDED_USER_DATA.title}
                                </Label>
                                <S.UserFollowers>
                                    <Label
                                        fontSize='18px'
                                        fontWeight='600'
                                        color={mainTheme.colors.inputText}
                                    >
                                        {EXPENDED_USER_DATA.followersAmount}
                                    </Label>
                                    <HeartIcon />
                                </S.UserFollowers>
                            </S.UserNameContanier>
                        </S.MainDetails>
                        <S.SocialContainer>
                            <Social social={EXPENDED_USER_DATA.socials} iconSize='18px' />{" "}
                        </S.SocialContainer>
                    </S.TopSection>
                    <ProfileSection title='About me' padding='0 12px'>
                        <Label fontSize='14px' color={mainTheme.colors.inputText}>
                            {EXPENDED_USER_DATA.description}
                        </Label>
                    </ProfileSection>
                    <ProfileSection title='Creator meals' padding='0 12px'>
                        <S.MealsContainer>
                            <Carousel
                                widthElement={270}
                                version='arrows'
                                gap={39.5}
                                buttonPosition={{ horizontal: -35, vertical: 230 }}
                            >
                                {EXPENDED_USER_DATA.meals.map((meal, index) => (
                                    <MealItem
                                        key={index}
                                        name={meal.name}
                                        image={meal.image}
                                        basicIngredients={meal.basicIngredients}
                                        kcal={meal.kcal}
                                        rating={meal.rating}
                                        c={meal.c}
                                        p={meal.p}
                                        f={meal.f}
                                    />
                                ))}
                            </Carousel>
                        </S.MealsContainer>
                    </ProfileSection>
                    <ProfileSection title='Creatore articles' gap='24px' padding='0 12px'>
                        <>
                            {EXPENDED_USER_DATA.articles.map((article) => (
                                <ProfileArticle
                                    key={article.id}
                                    header={article.header}
                                    content={article.content}
                                    image={article.image}
                                    author={article.author}
                                    id={article.id}
                                />
                            ))}
                        </>
                    </ProfileSection>
                </S.Content>
            </S.Container>
        </ViewBox>
    );
};

export default ExpandedUserProfileView;
