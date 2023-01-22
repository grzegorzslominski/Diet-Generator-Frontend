import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { getProducts, Product } from "../../models/Meal/Exclusions";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { Ingredient } from "../../models/Meal/Recipe";
import { mainTheme } from "../../themes/mainTheme";

import Input from "../UI/Input/Input";
import Label from "../UI/Label/Label";
import ScrollBox from "../UI/ScrollBox/ScrollBox";
import Spinner from "../UI/Spinner/Spinner";

import * as S from "./SearchProducts.style";

type SearchProductsProps = {
    selectedProducts: unknown;
    returnType: "products" | "ingredients";
    onChange: (value: Product[] | Ingredient[]) => void;
};

const SearchProducts = ({ selectedProducts, returnType, onChange }: SearchProductsProps) => {
    const { data: products, isLoading } = useQuery(["products"], () => getProducts());

    const [searchValue, setSearchValue] = useState<string | null>(null);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>();

    useEffect(() => {
        if (products && searchValue) {
            const currentFilteredProducts = products.filter((product: Product) =>
                product.name.includes(searchValue),
            );
            setFilteredProducts(currentFilteredProducts);
        }
    }, [searchValue]);

    useEffect(() => {
        if (products) {
            setFilteredProducts(products);
        }
    }, [products]);

    const onChangePrehandler = (productName: string) => {
        const currentSelectedProducts = JSON.parse(JSON.stringify(selectedProducts));
        const findedIndex = currentSelectedProducts.findIndex(
            (product: Product | Ingredient) => product.name === productName,
        );
        if (findedIndex > -1) {
            currentSelectedProducts.splice(findedIndex, 1);
        } else {
            let newAddedProduct = products?.find((product) => product.name === productName);
            if (newAddedProduct) {
                if (returnType === "ingredients") {
                    newAddedProduct = {
                        name: newAddedProduct.name,
                        amount: 0,
                        unit: "g",
                    } as Ingredient;
                }
                currentSelectedProducts.push(newAddedProduct);
            }
        }
        onChange(currentSelectedProducts);
    };

    const checkProductIsSelested = (productName: string): boolean => {
        const currentSelectedProducts = JSON.parse(JSON.stringify(selectedProducts));
        return currentSelectedProducts.some(
            (selectedProduct: Ingredient | Product) => selectedProduct.name === productName,
        );
    };

    return (
        <S.Container>
            <S.SearchContainer>
                <Label
                    width='100%'
                    fontSize='14px'
                    fontWeight='600'
                    color={mainTheme.colors.mainBlack}
                >
                    Add ingredients
                </Label>
                <Input
                    placeholder='search product'
                    onChange={(e) => setSearchValue(e.target.value)}
                    label='Search'
                    value={searchValue}
                    size='small'
                    width='200px'
                    icon={<SearchIcon />}
                />
            </S.SearchContainer>

            <S.ProductsContainer>
                {isLoading ? (
                    <Spinner />
                ) : (
                    <ScrollBox scrollDistance={30} height={265}>
                        {filteredProducts && filteredProducts.length ? (
                            <S.ProductsList>
                                {filteredProducts.map((product) => {
                                    return (
                                        <S.ProductItem
                                            onClick={() => onChangePrehandler(product.name)}
                                            key={product.name}
                                            selected={checkProductIsSelested(product.name)}
                                        >
                                            <Label
                                                fontSize='12px'
                                                textAlign='center'
                                                fontWeight='500'
                                                color={mainTheme.colors.mainBlack}
                                            >
                                                {product.name}
                                            </Label>
                                        </S.ProductItem>
                                    );
                                })}
                            </S.ProductsList>
                        ) : (
                            <S.EmptyContainer>
                                <Label fontSize='12px' color={mainTheme.colors.grey}>
                                    There are no products matching the search phrase
                                </Label>
                            </S.EmptyContainer>
                        )}
                    </ScrollBox>
                )}
            </S.ProductsContainer>
        </S.Container>
    );
};

export default SearchProducts;
