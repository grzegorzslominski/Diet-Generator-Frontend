import { APP_VIEWS } from "./const/viewsData";

import Carousel3D from "../../../../components/UI/Carousel3D/Carousel3D";
import AppViewItem from "./components/AppViewItem/AppViewItem";
import SectionContainer from "../helpers/SectionContainer/SectionContainer";
import Label from "../../../../components/UI/Label/Label";

import { mainTheme } from "../../../../themes/mainTheme";

import * as S from "./HowItsLook.style";

const HowItsLook = () => {
    return (
        <SectionContainer title={`How it's look`}>
            <S.Container>
                <Label color={mainTheme.colors.textColor} fontSize='1rem' fontFamily='Lato'>
                    Our platform provides full support for the user in achieving his nutritional
                    goals, starting with generating a diet and ending with maintaining his
                    motivation. Thanks to the application of a modern model of artificial
                    intelligence, each user is considered individually and our most important goal
                    is to ensure the highest level of satisfaction with the proposed meals.
                </Label>

                <Carousel3D gap={30} buttonPosition='bottom' initialIndex={1}>
                    {APP_VIEWS.map((view) => (
                        <AppViewItem key={view.image} {...view} />
                    ))}
                </Carousel3D>
            </S.Container>
        </SectionContainer>
    );
};
export default HowItsLook;
