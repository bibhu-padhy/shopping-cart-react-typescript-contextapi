import { useEffect, useState } from "react";
import { StoreItem } from "../components/StoreItem";

import { UseProductsHook } from "../context/productsHooks";
export function Store() {
  const productsHook = UseProductsHook();
  const { getProducts, storeItem } = productsHook;

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {storeItem.map((item) => (
        <StoreItem {...item} />
      ))}
    </div>
  );
}
