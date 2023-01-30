import { useDispatch } from "react-redux";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { parseUnixTime } from "../AuthViews/helpers/date";
import { getUserData, UserData } from "../../models/User/User";
import { setUser } from "../../redux/slices/user";
import { setNotification } from "../../redux/slices/notification";
import {
    BASIC_ACCOUNT_ADVANTAGES,
    PREMIUM_ACCOUNT_ADVANTAGES,
    SUB_TABLE_HEADERS,
    SUB_TABLE_KEY,
} from "./const/accountTypeData";
import { ReactComponent as PremiumIcon } from "../../assets/icons/premium-gradient.svg";
import { ReactComponent as MoneyIcon } from "../../assets/icons/money.svg";
import { mainTheme } from "../../themes/mainTheme";

import GradientLabel from "../../components/UI/GradientLabel/GradientLabel";
import Spinner from "../../components/UI/Spinner/Spinner";
import ViewBox from "../../components/UI/ViewBox/ViewBox";
import BoxPad from "../../components/UI/BoxPad/BoxPad";
import Button from "../../components/UI/Button/Button";
import Label from "../../components/UI/Label/Label";

import {
    cancelSubscriptionRequest,
    getSubscriptionInfo,
    postNewSubscriptionInfo,
    Subscription,
    SubscriptionRequest,
} from "../../models/Subscription/Subscription";

import * as S from "./PaymentView.style";

type PaymentView = {
    user: UserData;
};

const PaymentView = ({ user }: PaymentView) => {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();
    const { data: subInfo, isLoading } = useQuery(["subInfo"], getSubscriptionInfo);
    const [showPaymentSection, setShowPaymentSection] = useState(false);
    const [newestSub, setNewestSub] = useState<Subscription>();
    const [cancelIsLoading, setCancelIsLoading] = useState(false);

    useEffect(() => {
        if (subInfo && subInfo.length > 0) {
            const lastSub = JSON.parse(JSON.stringify(subInfo[subInfo.length - 1]));
            setNewestSub(lastSub);
        }
    }, [subInfo]);

    const createSubscription = async (paypalResponse: any) => {
        if (paypalResponse.status === "ACTIVE") {
            const subscriptionRequest: SubscriptionRequest = {
                start_time: paypalResponse.start_time,
                final_payment_time: paypalResponse.billing_info.final_payment_time,
                email_address: paypalResponse.subscriber.email_address,
                status: paypalResponse.status,
                payer_id: paypalResponse.subscriber.payer_id,
                id: paypalResponse.id,
            };
            const subscriptionConfirmation = await postNewSubscriptionInfo(subscriptionRequest);

            if (subscriptionConfirmation && subscriptionConfirmation.status === "ACTIVE") {
                queryClient.invalidateQueries(["subInfo"], {
                    refetchType: "all",
                });
                dispatch(
                    setNotification({
                        label: "Subscription",
                        header: "Success",
                        message: "Payment completed. Subscription activated",
                        timeout: 5000,
                    }),
                );
                queryClient.invalidateQueries(["subInfo"], {
                    refetchType: "all",
                });
                const refreshedUser = await getUserData();
                if (refreshedUser) {
                    dispatch(setUser(refreshedUser));
                }
            } else {
                dispatch(
                    setNotification({
                        label: "Subscription",
                        header: "Failed",
                        message: "Subscription failed, please try again later.",
                        timeout: 5000,
                    }),
                );
            }
        }
    };

    const cancelSubscription = async () => {
        setCancelIsLoading(true);
        const cancelSubInfo = await cancelSubscriptionRequest();
        if (cancelSubInfo.status === 200 || cancelSubInfo.status === 201) {
            queryClient.invalidateQueries(["subInfo"], {
                refetchType: "all",
            });
            queryClient.invalidateQueries(["userBasicProfile"], {
                refetchType: "all",
            });
            dispatch(
                setNotification({
                    label: "Subscription",
                    header: "Success",
                    message: "Unsubscribing valid",
                    timeout: 5000,
                }),
            );
        } else {
            dispatch(
                setNotification({
                    label: "Unsubscription",
                    header: "Failed",
                    message: "Unsubscription failed, please try again later.",
                    timeout: 5000,
                }),
            );
        }
        setCancelIsLoading(false);
    };
    return (
        <ViewBox>
            {isLoading ? (
                <Spinner color='secondary' size='big' />
            ) : (
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
                                        fontSize='16px'
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
                                    <S.Header iconSize='20px' gap='12px'>
                                        <Label
                                            fontSize='14px'
                                            fontWeight='500'
                                            color={mainTheme.colors.mainBlack}
                                        >
                                            Price
                                        </Label>
                                        <MoneyIcon />
                                    </S.Header>
                                    <Label fontSize='26px' color={mainTheme.colors.mainBlack}>
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
                                        fontSize='16px'
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
                                    <S.Header iconSize='20px' gap='12px'>
                                        <Label
                                            fontSize='14px'
                                            fontWeight='500'
                                            color={mainTheme.colors.mainBlack}
                                        >
                                            Price
                                        </Label>
                                        <MoneyIcon />
                                    </S.Header>
                                    <Label fontSize='26px' color={mainTheme.colors.mainBlack}>
                                        6.15$
                                    </Label>
                                </S.CostContanier>
                                <S.ActionButton>
                                    <Button
                                        styleType='gradientFull'
                                        onClick={() => setShowPaymentSection((prev) => !prev)}
                                        width='100px'
                                        size='small'
                                        disabled={newestSub?.status === "ACTIVE"}
                                    >
                                        Buy now
                                    </Button>
                                </S.ActionButton>
                            </S.PadContent>
                        </BoxPad>
                    </S.PadsContainer>

                    <S.SubscriptionDetails>
                        {showPaymentSection && newestSub?.status !== "ACTIVE" && (
                            <PayPalButtons
                                createSubscription={async (data, actions) => {
                                    return await actions.subscription.create({
                                        plan_id: "P-5H470394E7317452BMOLZMYQ",
                                    });
                                }}
                                onApprove={async (data, actions) => {
                                    const subscriptionInfo = await actions.subscription?.get();
                                    createSubscription(subscriptionInfo);
                                }}
                                style={{
                                    label: "subscribe",
                                }}
                            />
                        )}
                        <S.SubscriptionInfo>
                            {newestSub?.status === "ACTIVE" && (
                                <S.SubCancelContainer>
                                    <div>
                                        <Label
                                            fontSize='14px'
                                            fontWeight='500'
                                            color={mainTheme.colors.mainBlack}
                                            whiteSpace='pre'
                                        >
                                            {`Subscription status:  `}
                                        </Label>
                                        <Label
                                            fontSize='16px'
                                            fontWeight='600'
                                            color={mainTheme.colors.secondaryColor}
                                        >
                                            {newestSub?.status}
                                        </Label>
                                    </div>
                                    <Label fontSize='13px' color={mainTheme.colors.mainBlack}>
                                        Your subscription is active, your account has access to all
                                        functionalities available on the platform.
                                    </Label>
                                    <Label fontSize='13px' color={mainTheme.colors.mainBlack}>
                                        If you want to end your subscription, you can cancel it.
                                    </Label>
                                    <S.ActionButton>
                                        <Button
                                            width='180px'
                                            styleType='primaryEmpty'
                                            onClick={cancelSubscription}
                                            isLoading={cancelIsLoading}
                                        >
                                            Cancel subscription
                                        </Button>
                                    </S.ActionButton>
                                </S.SubCancelContainer>
                            )}
                        </S.SubscriptionInfo>

                        <S.SubscriptionHistory>
                            <Label
                                fontSize='14px'
                                fontWeight='500'
                                color={mainTheme.colors.mainBlack}
                            >
                                Subscription history
                            </Label>
                            {subInfo && subInfo.length ? (
                                <S.SubHistoryTable>
                                    <>
                                        <S.TableRow>
                                            {SUB_TABLE_HEADERS.map((headerItem: string) => (
                                                <S.TableRowItem key={headerItem}>
                                                    <Label
                                                        fontSize='12px'
                                                        fontWeight='600'
                                                        color={mainTheme.colors.secondaryColor}
                                                    >
                                                        {headerItem}
                                                    </Label>
                                                </S.TableRowItem>
                                            ))}
                                        </S.TableRow>
                                        {subInfo
                                            .map((sub: Subscription) => {
                                                return (
                                                    <S.TableRow key={sub.id}>
                                                        {SUB_TABLE_KEY.map((rowItemKey) => (
                                                            <S.TableRowItem
                                                                key={`${sub.id}-${rowItemKey}`}
                                                            >
                                                                <Label
                                                                    fontSize='13px'
                                                                    color={
                                                                        mainTheme.colors
                                                                            .secondaryColor
                                                                    }
                                                                >
                                                                    {rowItemKey !== "id" &&
                                                                    rowItemKey !== "status"
                                                                        ? parseUnixTime(
                                                                              +sub[rowItemKey],
                                                                          )
                                                                        : sub[rowItemKey]}
                                                                </Label>
                                                            </S.TableRowItem>
                                                        ))}
                                                    </S.TableRow>
                                                );
                                            })
                                            .reverse()}
                                    </>
                                </S.SubHistoryTable>
                            ) : (
                                <Label
                                    fontSize='12px'
                                    fontWeight='500'
                                    width='100%'
                                    textAlign='center'
                                >
                                    No subscription history
                                </Label>
                            )}
                        </S.SubscriptionHistory>
                    </S.SubscriptionDetails>
                </S.Container>
            )}
        </ViewBox>
    );
};

export default PaymentView;
