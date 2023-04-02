/* eslint-disable array-callback-return */
import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import CartCard from "../Components/ItemCart";
import { ShopContext } from "../Components/Context";
import { plantList } from "../Components/ItemInfo";
import { Link } from "react-router-dom";
export default function Cart() {
  const {
    cartItems,
    increaseCartItems,
    removeFromCart,
    getTotalCartAmount,
    deleteItem,
  } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const checkout = () => {
    alert('Thanks for "checking" this site out!');
  };

  return (
    <div>
      <Navbar />
      <div className="grid justify-center">
        {plantList.map((item) => {
          if (cartItems[item.id] !== 0) {
            return (
              <CartCard
                key={item.id}
                id={item.id}
                src={`${process.env.PUBLIC_URL}${item.url}`}
                alt={item.alt}
                name={item.name}
                price={"$" + item.price}
                quantity={cartItems[item.id]}
                decrease={() => {
                  removeFromCart(item.id);
                }}
                increase={() => {
                  increaseCartItems(item.id);
                }}
                itemTotal={"$" + item.price * cartItems[item.id]}
                delete={() => {
                  deleteItem(item.id);
                }}
              />
            );
          }
        })}
        {totalAmount > 0 && (
          <div>
            <div className="text-center py-2">Subtotal: ${totalAmount}</div>
            <div className="grid">
              <Link
                to={"/"}
                className="py-2 border-2 border-black hover:border-white hover:text-white hover:bg-black"
              >
                Continue Shopping
              </Link>
              <br />
              <button
                className="py-2 border-2 mb-12 border-black hover:border-white hover:text-white hover:bg-black"
                onClick={checkout}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
        {totalAmount < 1 && (
          <div className="grid">
            <div className="py-10">
              There's always money in the banana stand!
            </div>
            <div className="">
              <img
                src={`${process.env.PUBLIC_URL}/icons/banana.png`}
                alt=""
                className="py-10 mx-auto"
              ></img>
            </div>
            <Link
              to="/"
              className="m-10 py-2 border-2 border-black hover:border-white hover:text-white hover:bg-black"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
      <div className="text-xs text-center bottom-0 my-0 fixed inset-x-0">
        <p>
          <a
            href="https://www.flaticon.com/free-icons/banana"
            title="banana icons"
          >
            Banana icons created by Freepik - Flaticon
          </a>
        </p>
        <p>
          Photos from BrandoMakesBranding, Bruno, CharlesDeluvio, DeonBlack,
          GiorgioTrovato, IanTalmacs, JuliaKuzenkov, ManuelToro{" "}
          <a href="https://unsplash.com/photos/fZMMK7hoszA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            {" "}
            on Unsplash
          </a>
        </p>
      </div>
    </div>
  );
}
