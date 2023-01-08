import { ReactComponent as Heart } from "../../../../../assets/icons/heart.svg";
import { mainTheme } from "../../../../../themes/mainTheme";

import RedirectButton from "../../../../../components/UI/RedirectButton/RedirectButton";
import Label from "../../../../../components/UI/Label/Label";
import PieChart from "../chart/PieChart";

import { MealI } from "../const/mealListData";

import * as S from "./MealItem.style";
import GradientLabel from "../../../../../components/UI/GradientLabel/GradientLabel";

type MealItemProps = MealI & {
    version?: "basic" | "author";
};

const MealItem = ({
    name,
    rating,
    image,
    basicIngredients,
    mealAuthor,
    kcal,
    c,
    p,
    f,
    version = "basic",
}: MealItemProps) => {
    return (
        <S.Wrapper>
            <S.Container>
                <S.TopSection>
                    <Heart />
                    <S.MealImage image={image} />
                    <S.RateBox rate={Boolean(rating)}>
                        <Label
                            textAlign='center'
                            fontFamily='Montserrat'
                            fontWeight='500'
                            fontSize='16px'
                            lineHeight='1rem'
                            color='white'
                        >
                            {rating ? rating : "NEW"}
                        </Label>
                    </S.RateBox>
                </S.TopSection>
                <S.MiddleSection version={version}>
                    <Label
                        fontFamily='Montserrat'
                        fontWeight='600'
                        fontSize='22px'
                        textAlign='center'
                        color={mainTheme.colors.mainBlack}
                    >
                        {name}
                    </Label>
                    {version === "basic" ? (
                        <S.BasicIngredients>
                            <Label fontSize='14px' color='white'>
                                Basic ingredients
                            </Label>
                            <S.IngredientsList>
                                {basicIngredients.map((item) => {
                                    return (
                                        <li key={item}>
                                            <Label
                                                fontWeight='300'
                                                fontSize='12px'
                                                lineHeight='10px'
                                                color='white'
                                            >
                                                {item}
                                            </Label>
                                        </li>
                                    );
                                })}
                            </S.IngredientsList>
                        </S.BasicIngredients>
                    ) : (
                        <S.TextContent>
                            <Label
                                fontFamily='Montserrat'
                                fontSize='11px'
                                textAlign='center'
                                color='white'
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                varius lorem eget nisi bibendum, non consequat est ullamcorper. Ut
                                in volutpat sem, ut ultricies augue.
                            </Label>
                        </S.TextContent>
                    )}
                </S.MiddleSection>

                <S.BottomSection>
                    <S.NutrionsContainer>
                        <S.NutrionItem>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='500'
                                fontSize='18px'
                                color={mainTheme.colors.inputText}
                            >
                                {"Kcal: "}
                            </Label>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='500'
                                fontSize='18px'
                                color='#E6CB6E'
                            >
                                {kcal}
                            </Label>
                        </S.NutrionItem>

                        <S.NutrionItem>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='500'
                                fontSize='14px'
                                color={mainTheme.colors.inputText}
                            >
                                {"Fat: "}
                            </Label>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='500'
                                fontSize='14px'
                                color='#E6CB6E;'
                            >
                                {f}
                            </Label>
                        </S.NutrionItem>
                        <S.NutrionItem>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='500'
                                fontSize='14px'
                                color={mainTheme.colors.inputText}
                            >
                                {`Carb: `}
                            </Label>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='500'
                                fontSize='14px'
                                color='#E6CB6E'
                            >
                                {c}
                            </Label>
                        </S.NutrionItem>
                        <S.NutrionItem>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='500'
                                fontSize='14px'
                                color={mainTheme.colors.inputText}
                            >
                                {"Protein:"}
                            </Label>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='500'
                                fontSize='14px'
                                color='#E6CB6E;'
                            >
                                {p}
                            </Label>
                        </S.NutrionItem>
                    </S.NutrionsContainer>
                    <PieChart />
                </S.BottomSection>
                <S.ActionButton>
                    <RedirectButton label='Details' onClick={() => {}} />
                </S.ActionButton>
            </S.Container>
            {version === "author" && mealAuthor ? (
                <S.AuthorBox>
                    <S.AuthorName>
                        <GradientLabel gradient={mainTheme.gradients.buttonGradient}>
                            <Label fontSize='12px' fontWeight='600'>
                                Author
                            </Label>
                        </GradientLabel>
                        <Label fontSize='14px' fontWeight='500' color={mainTheme.colors.mainBlack}>
                            {mealAuthor.name}
                        </Label>
                    </S.AuthorName>
                    <img src={mealAuthor.avatarIMG} alt='meal author' />
                </S.AuthorBox>
            ) : null}
        </S.Wrapper>
    );
};

export default MealItem;
