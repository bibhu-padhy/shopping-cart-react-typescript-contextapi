import { useEffect, useState } from "react";
import { StoreItem } from "../components/StoreItem";

type StoreItemProps = {
  brand: string;
  id: number;
  price: number;
  thumbnail: string;
  title: string;
};

export function Store() {
  const [storeItem, setStoreItem] = useState<StoreItemProps[]>([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const res = await fetch(
      "https://dummyjson.com/products?limit=10&select=title,price,brand,thumbnail,description'"
    );
    const { products } = await res.json();
    console.log(products);
    setStoreItem(products);
  };
  return (
    <div className="grid grid-cols-4 gap-4">
      {storeItem.map((item) => (
        <StoreItem {...item} />
      ))}
    </div>
  );
}
