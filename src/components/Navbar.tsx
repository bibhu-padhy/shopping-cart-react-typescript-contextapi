import { Link } from "react-router-dom";
export function Navbar() {
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
        <span className="text-red-600"></span>
      </Link>
    </div>
  );
}
