export type Subscription = {
    id: number;
    payer_id: string;
    final_payment_time: number;
    start_time: number;
    status: "CANCELED" | string;
    subscription_id: string;
    valid_till: number;
};

export type SubscriptionRequest = {
    start_time: number;
    final_payment_time: number;
    email_address: string;
    status: string;
    payer_id: string;
    id: string;
};
