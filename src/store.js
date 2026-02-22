import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});
export default store;
// now provide to react app => main.jsx => <provider store={store}><APP/></provider>
