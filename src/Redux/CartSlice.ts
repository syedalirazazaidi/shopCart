import { shoesType } from "./../Types/types";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { shoesReducer } from "../Types/types";
import axios from "axios";

export const fetchCartItems: any = createAsyncThunk(
  "carts/fetchCartItems",
  (userId, thunkAPI) => {
    const response = axios.get("/postcartabc");
    // userAPI.fetchById(userId);
    console.log(response, "POPOPOPOP");
    return response;
  }
);
// export const postCartItems: any = createAsyncThunk(
//   "carts/fetchCartItems",
//   async (payload, thunkAPI) => {
//     console.log(payload, "LOADDDDD");
//     axios
//       .post("/api/postcart", payload)
//       .then(({ data }) => data)
//       .catch((err) => {
//         console.error(err);
//       });
//   }
// );

// interface shoesReducer {
//   cart: [];
//   isLoading: false;
//   error: "";
// }
const cartSlice = createSlice({
  name: "cart",
  initialState: <shoesReducer>{
    cart: [],
    isLoading: true,
    error: "",
  },

  reducers: {
    addToCart: (state, { payload }: PayloadAction<shoesType>) => {
      state.cart = [...state.cart, payload];
      state.error = "there is error";
      state.isLoading = false;
      return;
    },
    deleteCart(state, action) {
      console.log("aagga", action.payload);
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseCart() {},
    decreaseCart() {},
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

export const { addToCart, deleteCart } = cartSlice.actions;
// export const selectCount = (state: any) => ({
//   cart: state.reducers,
// });
export default cartSlice.reducer;
