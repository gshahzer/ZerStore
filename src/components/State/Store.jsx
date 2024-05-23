import { configureStore } from "@reduxjs/toolkit";
import CheckOutReducer from "./Slice/CheckOutSlice";
import cartReducer from "./Slice/CartSlice";
import  UserDetail  from "./Slice/Items";
export const store = configureStore({
  reducer: {
    checkout: CheckOutReducer,
    cart: cartReducer,
    admin: UserDetail,
  },
});
