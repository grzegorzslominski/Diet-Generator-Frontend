import { useQuery } from "@tanstack/react-query";
import { DietDay, getDiet } from "./const/meal";

import Spinner from "../../../../components/UI/Spinner/Spinner";
import DietDayItem from "./item/DietDayItem";

import * as S from "./DietDaysList.style";

const DietDaysList = () => {
    const { data: generatedDiet, isLoading } = useQuery(["current-diet"], () => getDiet());

    return (
        <S.Container>
            {isLoading ? (
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
