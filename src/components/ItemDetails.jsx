import React from "react";
import { Link, useParams } from "react-router-dom";
import { items } from "../Cartitems";
import { useDispatch } from "react-redux";
import { add } from "./State/Slice/CartSlice";

export const ItemDetails = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const item = items.find((item) => item.id === parseInt(id));
  const { name, price, image } = item;

  const handleAddToCart = () => {
    dispatch(add(item)); // Pass the item to the add action
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <div className="lg:flex items-center justify-center">
        <img
          src={image}
          alt=""
          className="lg:w-[25rem] md:w-[25rem]  w-[25rem]"
        />
        <div>
          <div className="text-2xl font-extrabold mb-4">{name}</div>
          <div className="mb-3">Rs {price}</div>
          <p className="max-w-[400px] mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            harum veniam deleniti vero quas, sequi unde ab natus nemo assumenda
            consequatur molestiae sed quia labore iste quibusdam in odit
            tempora?
          </p>
          {/* Call handleAddToCart when button is clicked */}
          <button
            className="bg-gray-900 w-96 p-2 text-white rounded-full"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
