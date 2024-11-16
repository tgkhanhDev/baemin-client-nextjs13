import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useShop = () => {
  const { shop, shopDetail } = useSelector(
    (state: RootState) => state.manageShop
  );
  return { shop, shopDetail };
};
