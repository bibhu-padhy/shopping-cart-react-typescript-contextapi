import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/context";
export function Navbar() {
  const { cartItems } = useContext(GlobalContext);
  return (
    <div className="h-12 px-3 flex items-center border-2 container mx-auto">
      <div className="flex-1 ">
        <Link to="/">Home</Link>
        <Link className="ml-3" to="/store">
          Store
        </Link>
        <Link className="ml-3" to="/about">
          About
        </Link>
      </div>

      <Link className="" to="/cart">
        Cart-
        <span className="text-red-600">{cartItems.length}</span>
      </Link>
    </div>
  );
}
