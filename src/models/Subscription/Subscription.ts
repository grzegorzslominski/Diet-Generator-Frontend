import axiosFoodieInstance from "../../axios/axiosFoodieInstance";
import { ENDPOINTS_SUBSCRIPTION } from "../../navigation/endpoints";

export type Subscription = {
    id: number;
    payer_id: string;
    final_payment_time: number;
    start_time: number;
    status: SubscriptionStatus;
    subscription_id: string;
    valid_till: number;
    [key: string]: string | number;
};

export type SubscriptionRequest = {
    start_time: number;
    final_payment_time: number;
    email_address: string;
    status: SubscriptionStatus | string;
    payer_id: string;
    id: string;
};

type SubscriptionStatus = "CANCELED" | "ACTIVE";

export const postNewSubscriptionInfo = async (subscriptionInfo: SubscriptionRequest) => {
    return await axiosFoodieInstance
        .post<SubscriptionRequest>(ENDPOINTS_SUBSCRIPTION.creatSubscription, subscriptionInfo)
        .then((response) => {
            return response.data;
        });
};

export const cancelSubscriptionRequest = async () => {
    return await axiosFoodieInstance
        .get(ENDPOINTS_SUBSCRIPTION.cancelSubscription)
        .then((response) => {
            return response;
        });
};

export const getSubscriptionInfo = async () => {
    return await axiosFoodieInstance
        .get<Subscription[]>(ENDPOINTS_SUBSCRIPTION.getSubscripton)
        .then((response) => {
            return response.data;
        });
};
