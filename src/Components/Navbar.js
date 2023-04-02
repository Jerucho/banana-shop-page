import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "./Context";

export default function Navbar(props) {
  const navigate = useNavigate();

  const handleClickToShop = () => {
    navigate("/shop");
  };

  const handleClickToHome = () => {
    navigate("/");
  };

  const handleClickToCart = () => {
    navigate("/cart");
  };

  const { cartItems } = useContext(ShopContext);

  const getTotal = () => {
    if (Object.values(cartItems).reduce((a, b) => a + b, 0) !== 0) {
      return Object.values(cartItems).reduce((a, b) => a + b, 0);
    } else {
      return;
    }
    // return Object.values(cartItems).reduce((a,b) => a + b, 0)
  };

  return (
    <div className="">
      <ul className="md:flex">
        <li className="flex-1 flex flex-col justify-center md:items-start">
          <Link
            className="md:py-5 px-10 hover:text-yellow-300 text-5xl uppercase font-bold"
            to={"/"}
          >
            Banana Shop
          </Link>
        </li>
        <li className="flex-2 flex flex-col justify-center items-center">
          <Link
            className="md:py-5 px-10 mx-5  hover:text-yellow-300 text-2xl uppercase"
            to={"/shop"}
          >
            Shop
          </Link>
        </li>
        <li className="flex-2 flex flex-col justify-center items-center">
          <Link
            className="md:py-5 px-10 mx-5 hover:text-yellow-300 text-2xl uppercase"
            to={"/cart"}
          >
            Cart
            <div className="text-sm md:absolute top-4 right-11">
              {getTotal()}
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
