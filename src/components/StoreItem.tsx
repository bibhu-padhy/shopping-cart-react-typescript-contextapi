import { useContext } from "react";
import { GlobalContext } from "../context/context";

type StoreItemProps = {
  brand: string;
  id: number;
  price: number;
  thumbnail: string;
  title: string;
};

export function StoreItem({
  brand,
  id,
  price,
  thumbnail,
  title,
}: StoreItemProps) {
  const { increaseItem, removeItem } = useContext(GlobalContext);
  return (
    <div className="shadow-lg p-2">
      <img src={thumbnail} className="h-40 w-full" />
      <div className="flex">
        <div className="flex-1 text-lg">{title}</div>
        <div>${price}</div>
      </div>
      <div className="flex justify-between font-medium">
        <button
          className="bg-slate-500 px-2 rounded shadow-lg hover:text-slate-300 text-slate-200"
          onClick={() => increaseItem(id)}
        >
          Add To Cart
        </button>

        <button
          className="bg-red-300 px-2 rounded shadow-lg hover:text-gray-700 text-gray-500"
          onClick={() => removeItem(id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
