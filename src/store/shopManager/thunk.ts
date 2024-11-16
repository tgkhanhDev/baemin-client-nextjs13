import { createAsyncThunk } from "@reduxjs/toolkit";
import { manageShop } from "../../services/manageShop";

export const getShopThunk = createAsyncThunk(
  "shop",
  async (_, { rejectWithValue }) => {
    try {
      const data = await manageShop.getShop();
      return data.data;
    } catch (error) {
      console.log("API error:", error);
      return rejectWithValue(error);
    }
  }
);

export const getShopDetailThunk = createAsyncThunk(
  "shopDetail",
  async (payload: string, { rejectWithValue }) => {
    try {
      const data = await manageShop.getShopDetail(payload);
      return data.data;
    } catch (error) {
      console.log("API error:", error);
      return rejectWithValue(error);
    }
  }
);