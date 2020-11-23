import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserById = createAsyncThunk(
  "add/addtocart",
  async (userId, thunkAPI) => {
    const response = await userAPI.fetchById(userId);
    return response.data;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    isLoading: false,
    error: "",
  },
  reducers: {
    addToCart(state, action) {
      console.log(action.payload, "loko");

      //   const { id, text } = action.payload;
      //   state.push({ id, text, completed: false });
    },
    deleteCart(state, action) {
      //   const todo = state.find((todo) => todo.id === action.payload);
      //   if (todo) {
      //     todo.completed = !todo.completed;
      //   }
    },
  },
  extraReducers: {
    [fetchUserById.fulfilled]: (state, action) => {
      // Add user to the state array
      state.isLoading = false;
      //   state.entities.push(action.payload);
    },
    [fetchUserById.pending]: (state, action) => {
      // Add user to the state array
      state.isLoading = true;
    },
    [fetchUserById.rejected]: (state, action) => {
      // Add user to the state array
      state.isLoading = false;
      state.error = "Error";
    },
  },
});

export const { addToCart, deleteCart } = cartSlice.actions;

export default cartSlice.reducer;
