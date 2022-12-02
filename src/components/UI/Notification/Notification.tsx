import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AnimatePresence, useAnimation } from "framer-motion";

import Label from "../Label/Label";
import GradientLabel from "../GradientLabel/GradientLabel";
import { TStore } from "../../../redux/store/store";

import * as S from "./Notification.style";

const NOTIFICATION_VARIANTS = {
    hidden: { opacity: 0, y: 300, transition: { duration: 0.75, ease: "easeOut" } },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

const Notification = () => {
    const notificationData = useSelector((state: TStore) => state?.notificationReducer);
    const notificationControls = useAnimation();

    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        if (notificationData.message) {
            if (showNotification) {
                notificationControls.start("hidden").then(() => {
                    notificationControls.start("show");

                    if (notificationData.timeout) {
                        setTimeout(() => {
                            setShowNotification(false);
                        }, notificationData.timeout);
                    }
                });
            } else {
                setShowNotification(true);
                if (notificationData.timeout) {
                    setTimeout(() => {
                        setShowNotification(false);
                    }, notificationData.timeout);
                }
            }
        } else {
            notificationControls.start("hidden");
            setShowNotification(false);
        }
    }, [notificationData]);

    useEffect(() => {
        if (showNotification) {
            notificationControls.start("show");
        }
    }, [showNotification]);

    return (
        <AnimatePresence>
            {showNotification && (
                <S.Container
                    initial={"hidden"}
                    variants={NOTIFICATION_VARIANTS}
                    animate={notificationControls}
                    exit={"hidden"}
                >
                    <S.Content>
                        <S.HeaderContainer>
                            {notificationData?.label && (
                                <Label
                                    fontWeight='400'
                                    fontSize='14px'
                                    lineHeight='30px'
                                    color='#7a86a1'
                                >
                                    {notificationData?.label}
                                </Label>
                            )}
                            <GradientLabel>
                                <Label fontWeight='700' fontSize='28px' lineHeight='30px'>
                                    {notificationData?.header.toUpperCase()}
                                </Label>
                            </GradientLabel>
                        </S.HeaderContainer>
                        <Label fontSize='14px'>{notificationData?.message}</Label>
                        <S.StyledClose onClick={() => setShowNotification(false)} />
                    </S.Content>
                </S.Container>
            )}
        </AnimatePresence>
    );
};

export default Notification;
