import React, { useEffect, useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { open } from "./State/Slice/CheckOutSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const { amount } = useSelector((state) => state.cart);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-20 ${
        isScrolled ? "bg-white shadow-lg" : ""
      }`}
    >
      <div className="flex items-center justify-between relative container py-4 px-2 mx-auto">
        <Link to="/">
          <div className="font-bold text-2xl">Zer Store</div>
        </Link>
        <div className="flex items-center">
         
          <div
            className="relative cursor-pointer ml-4"
            onClick={() => dispatch(open())}
          >
            <BiShoppingBag className="text-3xl opacity-80" />
            <div className="bg-black text-white rounded-full flex items-center justify-center absolute w-4 h-4 z-10 right-[-3px] bottom-[-3px] text-[10px]">
              {amount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
