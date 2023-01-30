import { useQuery } from "@tanstack/react-query";

import { getExcludedProducts } from "../../../DietGeneratorView/components/Choose your goal/Goals/const/data";
import { DietDay, getDiet } from "./const/meal";

import Spinner from "../../../../components/UI/Spinner/Spinner";
import DietDayItem from "./item/DietDayItem";

import * as S from "./DietDaysList.style";

const DietDaysList = () => {
    const { data: generatedDiet, isLoading: isLoadingDiet } = useQuery(["current-diet"], () =>
        getDiet(),
    );

    return (
        <S.Container>
            {isLoadingDiet ? (
                <Spinner color='secondary' size='big' />
            ) : (
                generatedDiet &&
                generatedDiet.daysForWeekDiet.map((dietDay: DietDay, index: number) => {
                    return (
                        <DietDayItem
                            key={dietDay.id}
                            dietDay={dietDay}
                            timestamp={generatedDiet.timestamp}
                            index={index}
                            userID={generatedDiet.user.id}
                        />
                    );
                })
            )}
        </S.Container>
    );
};

export default DietDaysList;
