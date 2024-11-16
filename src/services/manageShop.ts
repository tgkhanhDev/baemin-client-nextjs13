import { apiInstance } from "../constant/apiInstance";
import { Shop, ShopDetail } from "../types/shop";
import { utilsResponse } from "../types/utils";

const api = apiInstance("http://localhost:8080/shop-api");

export const manageShop = {
  getShop: () => api.get<utilsResponse<Shop>>(`/`),
  getShopDetail: (payload: string) =>
    api.get<utilsResponse<ShopDetail>>(`/${payload}`),
};
