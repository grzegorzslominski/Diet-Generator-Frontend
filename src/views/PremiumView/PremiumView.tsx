import GradientLabel from "../../components/UI/GradientLabel/GradientLabel";
import ViewBox from "../../components/UI/ViewBox/ViewBox";
import BoxPad from "../../components/UI/BoxPad/BoxPad";
import Label from "../../components/UI/Label/Label";

import { BASIC_ACCOUNT_ADVANTAGES, PREMIUM_ACCOUNT_ADVANTAGES } from "./const/accountTypeData";
import { ReactComponent as PremiumIcon } from "../../assets/icons/premium-gradient.svg";
import { ReactComponent as MoneyIcon } from "../../assets/icons/money.svg";
import { mainTheme } from "../../themes/mainTheme";

import * as S from "./PremiumView.style";
import Button from "../../components/UI/Button/Button";

const PremiumView = () => {
    return (
        <ViewBox>
            <S.Container>
                <S.PadsContainer>
                    <BoxPad width='300px'>
                        <S.PadContent>
                            <S.Header>
                                <Label
                                    fontSize='18px'
                                    fontWeight='600'
                                    lineHeight='32px'
                                    color={mainTheme.colors.mainBlack}
                                >
                                    Basic account
                                </Label>
                            </S.Header>

                            <S.AdvantagesListContainer>
                                <Label
                                    fontSize='14px'
                                    fontWeight='600'
                                    color={mainTheme.colors.inputText}
                                >
                                    Advantages
                                </Label>
                                <S.AdvantagesList>
                                    {BASIC_ACCOUNT_ADVANTAGES.map((advantage: string) => (
                                        <li key={advantage}>
                                            <Label
                                                fontSize='14px'
                                                fontWeight='500'
                                                color={mainTheme.colors.inputText}
                                            >
                                                {advantage}
                                            </Label>
                                        </li>
                                    ))}
                                </S.AdvantagesList>
                            </S.AdvantagesListContainer>
                            <S.CostContanier>
                                <S.Header iconSize='18px' gap='12px'>
                                    <Label
                                        fontSize='14px'
                                        fontWeight='500'
                                        color={mainTheme.colors.mainBlack}
                                    >
                                        Price
                                    </Label>
                                    <MoneyIcon />
                                </S.Header>
                                <Label fontSize='22px' color={mainTheme.colors.mainBlack}>
                                    FREE
                                </Label>
                            </S.CostContanier>
                        </S.PadContent>
                    </BoxPad>
                    <BoxPad width='300px'>
                        <S.PadContent>
                            <S.Header iconSize='30px'>
                                <GradientLabel>
                                    <Label fontSize='18px' fontWeight='600' lineHeight='32px'>
                                        Premium account
                                    </Label>
                                </GradientLabel>
                                <PremiumIcon />
                            </S.Header>
                            <S.AdvantagesListContainer>
                                <Label
                                    fontSize='14px'
                                    fontWeight='600'
                                    color={mainTheme.colors.inputText}
                                >
                                    Advantages
                                </Label>
                                <S.AdvantagesList>
                                    {PREMIUM_ACCOUNT_ADVANTAGES.map((advantage: string) => (
                                        <li key={advantage}>
                                            <Label
                                                fontSize='14px'
                                                fontWeight='500'
                                                color={mainTheme.colors.inputText}
                                            >
                                                {advantage}
                                            </Label>
                                        </li>
                                    ))}
                                </S.AdvantagesList>
                            </S.AdvantagesListContainer>
                            <S.CostContanier>
                                <S.Header iconSize='18px' gap='12px'>
                                    <Label
                                        fontSize='14px'
                                        fontWeight='500'
                                        color={mainTheme.colors.mainBlack}
                                    >
                                        Price
                                    </Label>
                                    <MoneyIcon />
                                </S.Header>
                                <Label fontSize='22px' color={mainTheme.colors.mainBlack}>
                                    10$
                                </Label>
                            </S.CostContanier>
                            <S.ActionButton>
                                <Button
                                    styleType='gradientFull'
                                    onClick={() => {}}
                                    width='100px'
                                    size='small'
                                >
                                    Buy
                                </Button>
                            </S.ActionButton>
                        </S.PadContent>
                    </BoxPad>
                </S.PadsContainer>
            </S.Container>
        </ViewBox>
    );
};

export default PremiumView;
