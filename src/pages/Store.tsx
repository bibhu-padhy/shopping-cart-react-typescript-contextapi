import { useContext } from "react";
import { StoreItem } from "../components/StoreItem";
import { GlobalContext } from "../context/context";

export function Store() {
  return (
    <div>store page</div>
    // <div className="grid grid-cols-4 gap-4">
    //   {storeItem.map((item) => (
    //     <StoreItem {...item} key={item.id} />
    //   ))}
    // </div>
  );
}
