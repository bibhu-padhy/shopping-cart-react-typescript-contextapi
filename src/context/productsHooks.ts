import { useState } from "react";

export type StoreItemProps = {
    brand: string;
    id: number;
    price: number;
    thumbnail: string;
    title: string;
};

export function UseProductsHook() {
    const [storeItem, setStoreItem] = useState<StoreItemProps[]>([]);

    const getProducts = async () => {
        const res = await fetch(
            "https://dummyjson.com/products?limit=10&select=title,price,brand,thumbnail,description'"
        );
        const { products } = await res.json();
        console.log(products);
        setStoreItem(products);
    }


    return { storeItem, getProducts }
};