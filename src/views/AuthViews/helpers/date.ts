import moment from "moment";

export const parseUnixTime = (unixTime: number): string => {
    return moment(unixTime).format("DD/MM/YYYY");
};

export const parseUnixTime2 = (unixTime: number, add: number): string => {
    return moment(unixTime).add(add, "d").format("DD/MM/YYYY");
};

export const parseUnitTimeToDay = (unixTime: number, add: number): string => {
    return moment(unixTime).add(add, "d").format("ddd");
};

export const calculatePremiumRemainingTime = (startTime?: number, endTime?: number) => {
    if (!startTime || !endTime) {
        return;
    }
    const remainingDays = moment(endTime).diff(moment(startTime), "days");
    return remainingDays > 0 ? remainingDays : 0;
};
