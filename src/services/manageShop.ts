import { apiInstance } from "../constant/apiInstance";
import { Shop, ShopDetail } from "../types/shop";
import { utilsResponse } from "../types/utils";

const api = apiInstance("http://localhost:8080/shop-api");

interface FilterParams {
  name?: string;
  location?: string;
  label?: string;
  type?: string;
}

export const manageShop = {
  getShop: (params: FilterParams = {}) => {
    const queryParams = new URLSearchParams();
    if (params.name) queryParams.append('name', params.name);
    if (params.location) queryParams.append('location', params.location);
    if (params.label) queryParams.append('label', params.label);
    console.log(queryParams.toString());
    
    return api.get<utilsResponse<Shop>>(`/?${queryParams.toString()}`);
  },
  getShopDetail: (payload: string) =>
    api.get<utilsResponse<ShopDetail>>(`/${payload}`),
};
