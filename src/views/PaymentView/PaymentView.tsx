import { BASIC_ACCOUNT_ADVANTAGES, PREMIUM_ACCOUNT_ADVANTAGES } from "./const/accountTypeData";
import { ReactComponent as PremiumIcon } from "../../assets/icons/premium-gradient.svg";
import { ReactComponent as MoneyIcon } from "../../assets/icons/money.svg";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { mainTheme } from "../../themes/mainTheme";
import { useState } from "react";

import GradientLabel from "../../components/UI/GradientLabel/GradientLabel";
import ViewBox from "../../components/UI/ViewBox/ViewBox";
import BoxPad from "../../components/UI/BoxPad/BoxPad";
import Button from "../../components/UI/Button/Button";
import Label from "../../components/UI/Label/Label";

import * as S from "./PaymentView.style";

const PaymentView = () => {
    const [showPaymentSection, setShowPaymentSection] = useState(true);

    return (
        <ViewBox>
            <S.Container>
                <S.PadsContainer>
                    <BoxPad width='100%'>
                        <S.PadContent>
                            <S.Header>
                                <Label
                                    fontSize='20px'
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
                                <Label fontSize='24px' color={mainTheme.colors.mainBlack}>
                                    FREE
                                </Label>
                            </S.CostContanier>
                        </S.PadContent>
                    </BoxPad>
                    <BoxPad width='100%'>
                        <S.PadContent>
                            <S.Header iconSize='30px'>
                                <GradientLabel>
                                    <Label fontSize='20px' fontWeight='600' lineHeight='32px'>
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
                                    onClick={() => setShowPaymentSection((prev) => !prev)}
                                    width='100px'
                                    size='small'
                                >
                                    Buy now
                                </Button>
                            </S.ActionButton>
                        </S.PadContent>
                    </BoxPad>
                </S.PadsContainer>
                {showPaymentSection && (
                    <S.PaymentSection>
                        <PayPalButtons
                            createSubscription={async (data, actions) => {
                                return await actions.subscription
                                    .create({
                                        plan_id: "P-5H470394E7317452BMOLZMYQ",
                                    })
                                    .then((orderId) => {
                                        // Your code here after create the order

                                        return orderId;
                                    });
                            }}
                            onApprove={async (data, actions) => {
                                const order = await actions.order?.capture();
                                console.log(actions.subscription?.get());
                            }}
                            style={{
                                label: "subscribe",
                            }}
                        />
                    </S.PaymentSection>
                )}
            </S.Container>
        </ViewBox>
    );
};

export default PaymentView;

// onApprove={(data, actions) => {
//     console.log(actions.order);

//     if (actions.order) {
//         return actions.order.capture().then((details) => {
//             console.log(details);

//             if (details.payer.name)
//                 alert(
//                     "Transaction completed by " +
//                         details.payer.name.given_name,
//                 );
//         });
//     } else {
//         return new Promise(() => {
//             setTimeout(() => console.log("timeout"), 1000);
//         }).then(() => console.log("timeout then"));
//     }
// }}
