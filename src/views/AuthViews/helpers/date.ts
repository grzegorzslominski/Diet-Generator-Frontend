import moment from "moment";

export const parseUnixTime = (unixTime: number): string => {
    return moment(unixTime).format("DD/MM/YYYY");
};

export const parseUnixTime2 = (unixTime: number,add: number): string => {
    return moment(unixTime).add(add,'d').format("DD/MM/YYYY");
};

export const parseUnitTimeToDay = (unixTime: number, add:number): string => {
    return moment(unixTime).add(add,'d').format("ddd");

}