import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";

import { mainTheme } from "../../../../../../../themes/mainTheme";
import { ReactComponent as HeartEmptyIcon } from "../../../../../../../assets/icons/heart-empty.svg";
import { ReactComponent as HeartFullIcon } from "../../../../../../../assets/icons/heart-full.svg";
import { ReactComponent as Info } from "../../../../../../../assets/icons/infoIcon.svg";
import { ReactComponent as ReloadIcon } from "../../../../../../../assets/icons/reaload.svg";
import noPhoto from "../../../../../../../assets/no-photo.png";
import { prepareRecipeNutriensToChart } from "../../../../../../../helpers/statistics";
import { setNotification } from "../../../../../../../redux/slices/notification";
import { NUTRIONS_BOX_PRESET } from "../../../const/nutrion";

import MealInfoModal from "../../../../../../UserProfileView/BasicUserProfileView/components/OwnRecipesCard/components/OwnRecipe/RecipeInfoModal/RecipeInfoModal";
import Label from "../../../../../../../components/UI/Label/Label";
import PieChart from "../../../../../../../components/Charts/PieChart/PieChart";
import RecipeRatingModal from "./DayMealDetailsItem/RecipeRatingModal/RecipeRatingModal";

import { Like, PublishedRecipe } from "../../../../../../../models/User/ExpandedUser";
import {
    INIT_REPLACE_RECIPE_INFO,
    LikeMealStatus,
    replaceRecipe,
    ReplaceRecipeInfo,
    sendLikeRecipe,
} from "../../../../../../../models/Meal/Recipe";

import * as S from "./DietDayRecipe.style";

const checkUserLikeMeal = (recipeLikeList: Like[], userID: number) => {
    return recipeLikeList.some((recipeLike) => recipeLike.user?.id === userID);
};

type DietDayRecipeProps = {
    recipe: PublishedRecipe;
    userID: number;
    dayDietId: number;
};

const DietDayRecipe = ({ recipe, userID, dayDietId }: DietDayRecipeProps) => {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();

    const [likeRecipeStatus, setLikeRecipeStatus] = useState<LikeMealStatus>();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [openRatingModal, setOpenRatingModal] = useState(false);
    const [isReloading, setIsReloading] = useState(false);

    const preparedNutriensChartData = useMemo(
        () =>
            prepareRecipeNutriensToChart({
                protein: recipe.protein,
                carbs: recipe.carbs,
                fat: recipe.fat,
            }),
        [recipe],
    );

    useEffect(() => {
        if (userID) {
            const isLiked = checkUserLikeMeal(recipe.recipeLikes, userID);
            const currentLikeStatus = {
                isLiked: isLiked,
                likesCount: recipe.recipeLikes.length,
            };
            setLikeRecipeStatus(currentLikeStatus);
        }
    }, [recipe]);

    const handleIsOpen = () => setIsOpen((current) => !current);

    const changeRecipeHandler = async () => {
        setIsReloading(true);

        const replacedRecipeInfo: ReplaceRecipeInfo = JSON.parse(
            JSON.stringify(INIT_REPLACE_RECIPE_INFO),
        );
        replacedRecipeInfo.recipeToReplaceId = recipe.id ? recipe.id : 0;
        replacedRecipeInfo.dayDietId = dayDietId;

        const replaceResponse = await replaceRecipe(replacedRecipeInfo);
        if (replaceResponse) {
            queryClient.invalidateQueries(["current-diet"], {
                refetchType: "all",
            });
            dispatch(
                setNotification({
                    label: "Replace meal",
                    header: "Success",
                    message: "Meal was replaced",
                    timeout: 5000,
                }),
            );
        } else {
            dispatch(
                setNotification({
                    label: "Replace meal",
                    header: "Failed",
                    message: "Meal replacement failed, please try again later",
                    timeout: 5000,
                }),
            );
        }

        setIsReloading(false);
    };

    const onLikeRecipe = async () => {
        if (!recipe.id) {
            return;
        }
        const likeResponse = await sendLikeRecipe(recipe.id);
        if (likeResponse.status === 200) {
            const currentLikeMealStatus: LikeMealStatus = JSON.parse(
                JSON.stringify(likeRecipeStatus),
            );
            currentLikeMealStatus.isLiked = !likeRecipeStatus?.isLiked;
            currentLikeMealStatus.likesCount =
                likeRecipeStatus?.isLiked && currentLikeMealStatus.likesCount
                    ? currentLikeMealStatus.likesCount - 1
                    : currentLikeMealStatus.likesCount + 1;
            setLikeRecipeStatus(currentLikeMealStatus);
            dispatch(
                setNotification({
                    label: "Like post",
                    header: "Success",
                    message: `Like was ${currentLikeMealStatus ? "added" : "added"}`,
                    timeout: 5000,
                }),
            );
        } else {
            dispatch(
                setNotification({
                    label: "add like to post",
                    header: "Failed",
                    message: "Cannot add like",
                    timeout: 5000,
                }),
            );
        }
    };

    return (
        <S.Container>
            <S.Content>
                <img src={recipe.imagePath ? recipe.imagePath : noPhoto} alt='image' />
                <S.SecondItem>
                    <S.LabelsContainer>
                        <Label fontWeight='600' fontSize='18px' color={mainTheme.colors.mainBlack}>
                            {recipe.title}
                        </Label>
                    </S.LabelsContainer>
                    <S.SecondItemsContent>
                        {Object.keys(NUTRIONS_BOX_PRESET).map((nutrienKey: string) => (
                            <S.SecondSingleItem key={`${recipe.id}-${nutrienKey}`}>
                                <Label
                                    fontFamily='Lato'
                                    fontWeight='600'
                                    textAlign='center'
                                    fontSize='0.7rem'
                                    color={mainTheme.colors.mainBlack}
                                >
                                    {NUTRIONS_BOX_PRESET[nutrienKey].label}
                                </Label>
                                <Label
                                    fontFamily='Montserrat'
                                    fontWeight='600'
                                    fontSize='0.6rem'
                                    lineHeight='1rem'
                                    textAlign='center'
                                    color={mainTheme.colors.mainBlack}
                                >
                                    {recipe[nutrienKey]}
                                </Label>
                                <S.NutrionBoxFooter
                                    barColor={NUTRIONS_BOX_PRESET[nutrienKey].barColor}
                                />
                            </S.SecondSingleItem>
                        ))}
                    </S.SecondItemsContent>
                </S.SecondItem>

                <PieChart nutriensChartData={preparedNutriensChartData} />
                <S.ThirdItemContainer>
                    <Label
                        fontFamily='Montserrat'
                        fontWeight='600'
                        fontSize='0.7rem'
                        lineHeight='1rem'
                        color='white'
                    >
                        Basic ingredients:
                    </Label>
                    <S.ThirdItemUl>
                        {recipe.recipesIngredients.slice(0, 3).map((item, index: number) => {
                            return (
                                <S.ThirdItemLi key={index}>
                                    <Label
                                        fontFamily='Montserrat'
                                        fontWeight='500'
                                        fontSize='0.7rem'
                                        lineHeight='0.9rem'
                                        color='white'
                                    >
                                        {item.name}
                                    </Label>
                                </S.ThirdItemLi>
                            );
                        })}
                    </S.ThirdItemUl>
                </S.ThirdItemContainer>
                <S.ActionsContainer>
                    <S.FourthContainer>
                        <S.FourthContainerItem isReloading={isReloading}>
                            <ReloadIcon onClick={changeRecipeHandler} />
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='500'
                                fontSize='22px'
                                width='15px'
                                color={mainTheme.colors.mainBlack}
                            >
                                {likeRecipeStatus?.likesCount ? likeRecipeStatus.likesCount : 0}
                            </Label>
                            {likeRecipeStatus?.isLiked ? (
                                <HeartFullIcon onClick={onLikeRecipe} />
                            ) : (
                                <HeartEmptyIcon onClick={onLikeRecipe} />
                            )}
                            <Info onClick={handleIsOpen} />
                        </S.FourthContainerItem>
                    </S.FourthContainer>
                    <Label
                        fontSize='14px'
                        fontWeight='600'
                        color={mainTheme.colors.mainBlack}
                        textAlign='end'
                        onClick={() => setOpenRatingModal(true)}
                    >
                        Rate meal
                    </Label>
                </S.ActionsContainer>
            </S.Content>
            {isOpen && <MealInfoModal userRecipe={recipe} close={() => setIsOpen(false)} />}
            {openRatingModal && recipe.id && (
                <RecipeRatingModal
                    recipeID={recipe.id}
                    recipeTitle={recipe.title}
                    close={() => setOpenRatingModal(false)}
                />
            )}
        </S.Container>
    );
};

export default DietDayRecipe;
