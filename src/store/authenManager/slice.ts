import { createSlice } from "@reduxjs/toolkit";
import {
  loginThunk
} from "./thunk";
import { toast } from "react-toastify";

type stateType = {
  user: any;
};

const initialState: stateType = {
  user: {},
};

export const manageAuthenSlice = createSlice({
  name: "manageAuthen",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
      console.log("TOAST SUCCESS: ", payload);
      toast.success(`Welcome back to Baemin, ${payload.last_name}`);
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(payload.user_id));
    });
  }
});

export const { reducer: manageAuthenReducer, actions: manageAuthenActions } =
  manageAuthenSlice;
