import React from "react";
import { useDispatch } from "react-redux"; // Fixed import statement
import { add } from "./State/Slice/CartSlice";
import { Link } from "react-router-dom";
const ShoppingItems = ({ item }) => {
  const dispatch = useDispatch();
  const { image, price, name, id } = item;

  return (
    <div>
      <Link to={`/ItemDetails/${id}`}>
        <div className="bg-white rounded-3xl h-[400px] flex items-center justify-center">
          <img src={image} alt="" className="w-[200px]" />
        </div>
      </Link>
      <div className="mt-6 flex justify-between items-center px-4">
        <div>
          <div className="text-sm font-bold mb-3">{name}</div>
          <div className="text-xl font-bold">Rs {price}</div>
        </div>
        <button p-3 onClick={() => dispatch(add(item))}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ShoppingItems;
