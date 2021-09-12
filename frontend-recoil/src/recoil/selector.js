import {
  atom,
  selector,
  waitForAll,
  selectorFamily,
  useRecoilValueLoadable,
  useRecoilState,
} from "recoil";
import axios from "axios";
import { productById, cartState } from "./atom";
import { getProductDetails } from "../recoil/productState";
// import { useRecoilValueLoadable } from "recoil";

export const listP = selector({
  key: "listP",
  get: async () => {
    try {
      const response = await axios.get(`/api/products`);
      return response;
    } catch (error) {
      throw error;
    }
  },
});

export const getProductbyId = selector({
  key: "getProductbyId",
  get: async ({ get }) => {
    try {
      //const [product, setProduct] = useRecoilState (productById)
      const product = get(productById);
      const response = await axios.get(`/api/products/${product.productId}`);
      //console.log(response);
      return response.data
    } catch (error) {
      throw error;
    }
  },
});

export const totalQty = selector({
  key: "totalQty",
  get: ({ get }) => {
    const totalQty = get(cartState).reduce(
      (amount, item) => Number(item.amount) + amount,0
    );
    return totalQty;
  },
});

export const DetailsWithoutSuspense = () => {
  const { state, contents } = useRecoilValueLoadable(getProductbyId);
  //console.log(state);
  //console.log(contents)

  switch (state) {
    case "hasValue":
      return state
    case "loading":
      return console.log("Loading...Hello");
    case "hasError":
      throw <div>{contents.message}</div>;
    default:
      return "";
  }
};
