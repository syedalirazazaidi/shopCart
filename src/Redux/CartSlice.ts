import { shoesType } from "./../Types/types";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { shoesReducer, shoesReducerApp } from "../Types/types";
import axios from "axios";
interface cartdrraay {
  tempCart: [];
}
export const fetchCartItems: any = createAsyncThunk(
  "carts/fetchCartItems",
  (userId, thunkAPI) => {
    const response = axios.get("/postcartabc");
    console.log(response, "POPOPOPOP");
    return response;
  }
);
const cartSlice = createSlice({
  name: "cart",
  initialState: <shoesReducer>{
    cart: [],
    isLoading: true,
    error: "",
    total: 0,
    amount: 1,
    // quantityA: 0,
    quantityA: 0,
  },

  reducers: {
    addToCart: (state, { payload }: PayloadAction<shoesType>) => {
      if (state.quantityA == 0) {
        let carts = {
          id: payload.id,
          quantity: 1,
          name: payload.name,
          photo: payload.photo,
          price: payload.price,
        };
        state.cart.push(carts);
      } else {
        let check = false;
        state.cart.map((item, key) => {
          if (item.id == payload.id) {
            state.cart[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            id: payload.id,
            quantity: 1,
            name: payload.name,
            photo: payload.photo,
            price: payload.price,
          };
          state.cart.push(_cart);
        }
      }
      state.quantityA = state.quantityA + 1;
    },

    deleteCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseCart(state, { payload }) {
      state.quantityA = state.quantityA + 1;
      console.log(state.cart[payload].quantity, "PLPLP");
      state.cart[payload].quantity = state.cart[payload].quantity + 1;
    },
    decreaseCart(state, action) {
      let quantity = state.cart[action.payload].quantity;
      if (quantity > 1) {
        state.quantityA = state.quantityA - 1;
        state.cart[action.payload].quantity =
          state.cart[action.payload].quantity - 1;
      }
    },
  },
  extraReducers: {
    [fetchCartItems.fulfilled]: (state, action) => {
      console.log(state, "longing");
      state.error = "error are here";
      state.isLoading = false;
      console.log(state, "STATE+++");
    },
    [fetchCartItems.pending]: (state, action) => {
      // Add user to the state array
      state.isLoading = true;
    },
    [fetchCartItems.rejected]: (state, action) => {
      // Add user to the state array
      state.isLoading = false;
      state.error = "Error";
    },
  },
});

export const {
  addToCart,
  deleteCart,
  increaseCart,
  decreaseCart,
} = cartSlice.actions;
// export const selectCount = (state: any) => ({
//   cart: state.reducers,
// });
export default cartSlice.reducer;
