import { ReactComponent as Heart } from "../../../../../assets/icons/heart.svg";
import { mainTheme } from "../../../../../themes/mainTheme";
import arrow from "../../../../../assets/icons/arrow.svg";

import PieChart from "../chart/PieChart";
import MealAuthor from "./author/MealAuthor";
import Label from "../../../../../components/UI/Label/Label";

import { MealI } from "../const/mealListData";

import * as S from "./MealItem.style";

type MealItemProps = MealI & {
    version?: "basic" | "author";
};

const MealItem = ({
    name,
    rating,
    image,
    basicIngredients,
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
                        fontSize='1.2rem'
                        textAlign='center'
                        color={mainTheme.colors.mainBlack}
                    >
                        {name}
                    </Label>
                    {version === "basic" ? (
                        <S.BasicIngredients>
                            <Label fontWeight='500' fontSize='14px' color='white'>
                                Basic ingredients
                            </Label>
                            <S.IngredientsList>
                                {basicIngredients.map((item) => {
                                    return (
                                        <li key={item}>
                                            <Label fontSize='12px' lineHeight='10px' color='white'>
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
                                fontWeight='400'
                                fontSize='0.6rem'
                                textAlign='center'
                                color='white'
                                lineHeight='1px'
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                varius lorem eget nisi bibendum, non consequat est ullamcorper. Ut
                                in volutpat sem, ut ultricies augue.
                            </Label>
                        </S.TextContent>
                    )}
                </S.MiddleSection>

                <S.BottomSection>
                    <S.BottomItemContainer>
                        <S.BottomSingleItem>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='500'
                                fontSize='1.1rem'
                                lineHeight='1.4rem'
                                color='#363635'
                            >
                                {"Kcal: "}
                            </Label>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='500'
                                fontSize='1.1rem'
                                lineHeight='1.4rem'
                                color='#E6CB6E'
                            >
                                {kcal}
                            </Label>
                        </S.BottomSingleItem>
                        <S.BottomSingleItem>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='500'
                                fontSize='0.8rem'
                                lineHeight='1.4rem'
                                color='#363635'
                                whiteSpace='pre-line'
                            >
                                {`C: `}
                            </Label>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='500'
                                fontSize='0.8rem'
                                lineHeight='1.4rem'
                                color='#E6CB6E'
                            >
                                {c}
                            </Label>
                        </S.BottomSingleItem>
                        <S.BottomSingleItem>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='500'
                                fontSize='0.8rem'
                                lineHeight='1.4rem'
                                color='#363635'
                            >
                                {"P:"}
                            </Label>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='500'
                                fontSize='0.8rem'
                                lineHeight='1.4rem'
                                color='#E6CB6E;'
                            >
                                {p}
                            </Label>
                        </S.BottomSingleItem>
                        <S.BottomSingleItem>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='500'
                                fontSize='0.8rem'
                                lineHeight='1.4rem'
                                color='#363635'
                            >
                                {"F: "}
                            </Label>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='500'
                                fontSize='0.8rem'
                                lineHeight='1.4rem'
                                color='#E6CB6E;'
                            >
                                {f}
                            </Label>
                        </S.BottomSingleItem>
                    </S.BottomItemContainer>
                    <PieChart />
                    {version === "basic" ? (
                        <S.Footer>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='600'
                                fontSize='0.8rem'
                                textAlign='center'
                                color={mainTheme.colors.mainBlack}
                            >
                                Details:
                            </Label>
                            <img src={arrow} alt='' />
                        </S.Footer>
                    ) : null}
                </S.BottomSection>
            </S.Container>
            {version === "author" ? <MealAuthor /> : null}
        </S.Wrapper>
    );
};

export default MealItem;
