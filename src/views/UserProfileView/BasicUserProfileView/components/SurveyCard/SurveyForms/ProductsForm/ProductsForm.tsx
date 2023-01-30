import { useQuery } from "@tanstack/react-query";

import {
    getSurveyProducts,
    ProductsAnswer,
    ProductsSurveyAnswers,
    SurveyProduct,
} from "../../../../../../../models/Survey/Survey";
import noPhoto from "../../../../../../../assets/no-photo.jpg";
import { mainTheme } from "../../../../../../../themes/mainTheme";

import RatingInput from "../RatingInput/RatingInput";
import Label from "../../../../../../../components/UI/Label/Label";
import Spinner from "../../../../../../../components/UI/Spinner/Spinner";
import ScrollBox from "../../../../../../../components/UI/ScrollBox/ScrollBox";

import * as S from "./ProductsForm.style";

type ProductsFormProps = {
    productAnswers: ProductsSurveyAnswers;
    onChange: (property: string, value: ProductsAnswer[]) => void;
};

const ProductsForm = ({ productAnswers, onChange }: ProductsFormProps) => {
    const { data: surveyProducts, isLoading } = useQuery(["surveyProducts"], getSurveyProducts);

    const onChangePrehendler = (id: number, value: number) => {
        const currentAnswers: ProductsSurveyAnswers = JSON.parse(JSON.stringify(productAnswers));

        const findedIndex = currentAnswers.findIndex((answer) => answer.id === id);
        if (findedIndex > -1) {
            currentAnswers[findedIndex].score = value;
        } else {
            const newAnswer = JSON.parse(JSON.stringify({ id: id, score: value }));
            currentAnswers.push(newAnswer);
        }
        onChange("products", currentAnswers);
    };

    return (
        <S.Container>
            <Label fontSize='14px' color={mainTheme.colors.mainBlack} fontWeight='600' width='100%'>
                Product Survey
            </Label>
            {isLoading ? (
                <Spinner color='secondary' size='big' />
            ) : (
                <ScrollBox height={300} scrollDistance={20}>
                    <S.Content>
                        <S.ProductRatingWrapper>
                            {surveyProducts?.map((recipe: SurveyProduct) => (
                                <S.ProductRatingItem key={recipe.id}>
                                    <img src={recipe.imagePath ? recipe.imagePath : noPhoto} />
                                    <S.ProductRating>
                                        <Label
                                            fontSize='14px'
                                            fontWeight='600'
                                            color={mainTheme.colors.mainBlack}
                                        >
                                            {recipe.title}
                                        </Label>
                                        <RatingInput
                                            onChange={(value: number) =>
                                                onChangePrehendler(recipe.id, value)
                                            }
                                            value={
                                                productAnswers?.find(
                                                    (answer) => answer.id === recipe.id,
                                                )?.score
                                            }
                                        />
                                    </S.ProductRating>
                                </S.ProductRatingItem>
                            ))}
                        </S.ProductRatingWrapper>
                    </S.Content>
                </ScrollBox>
            )}
        </S.Container>
    );
};

export default ProductsForm;
