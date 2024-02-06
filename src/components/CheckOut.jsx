import React from "react";
import { HiChevronLeft, HiTrash } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { open } from "./State/Slice/CheckOutSlice";
import CheckOutItems from "./CheckOutItems"; // Assuming you have a CheckOutItems component
import { clear } from "./State/Slice/CartSlice";

const CheckOut = () => {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((state) => state.cart);

  return (
    <div className="bg-transparentBlack fixed z-30 top-0 left-0 w-full h-screen">
      <div className="h-full bg-white sm:w-[40rem] min-w-[15rem] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center cursor-pointer">
              <HiChevronLeft />
              <span
                className="uppercase text-[0.95] select-none"
                onClick={() => dispatch(open())}
              >
                Continue shopping
              </span>
            </div>
            <div>Shopping Bag ({amount})</div>
          </div>
          <div className="mt-8">
            {cartItems.length === 0 ? (
              <div className="uppercase text-center text-3xl">
                Your Cart is empty
              </div>
            ) : (
              <>
                {cartItems.map((item) => { // Changed variable name from cartItems to item
                  return <CheckOutItems key={item.id} cartItem={item} />;
                })}
                <div className="flex justify-between items-center mt-12">
                  <div className="text-xl text-gray-900">
                    Total Cost: Rs {total.toFixed(2)}
                  </div>
                  <HiTrash className="cursor-pointer text-2xl text-gray-900" onClick={() => dispatch(clear()) }/>
                </div>
                <div className="text-center cursor-pointer bg-gray-900 p-2 mt-8 text-white rounded-full">Check Out</div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
