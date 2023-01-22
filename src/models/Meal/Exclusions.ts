import axiosFoodieInstance from "../../axios/axiosFoodieInstance";
import { ENDPOINTS_MEALS } from "../../navigation/endpoints";

export type ExcludedProducts = {
    listOfExcludedProducts: Product[];
};

export type Product = {
    id?: number;
    name: string;
};

export const getProducts = async () => {
    return await axiosFoodieInstance.get<Product[]>(ENDPOINTS_MEALS.products).then((response) => {
        if (response.status === 200) {
            return response.data;
        }
    });
};
