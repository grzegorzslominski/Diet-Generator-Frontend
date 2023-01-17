import moment from "moment";

export const parseUnixTime = (unixTime: number): string => {
    return moment(unixTime).format("DD/MM/YYYY");
};
