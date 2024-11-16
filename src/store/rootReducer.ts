import { combineReducers } from "@reduxjs/toolkit";
import { manageFoodReducer } from "./foodManager/slice";
import { manageShopReducer } from "./shopManager/slice";

export const rootReducer = combineReducers({
  manageFood: manageFoodReducer,
  manageShop: manageShopReducer,
});
