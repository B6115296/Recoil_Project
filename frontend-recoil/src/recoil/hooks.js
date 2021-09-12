import { useRecoilState } from "recoil";
import { productListState, cartState } from "./atom";

// Utility functions

const cloneIndex = (items, id) => ({
  clone: items.map((product) => ({ ...product })),
  index: items.findIndex((product) => product.id === id),
});

export const addToCart = () => {
  const [products, setProducts] = useRecoilState(cartState);

  return (product) => {
    const { clone, index } = cloneIndex(products, product.id);

    if (index !== -1) {
      clone[index].amount += 1;
      setProducts(clone);
    } else {
      setProducts([...clone, { ...product, amount: 1 }]);
    }
  };
};

export const getPro = () => {
  
}
