import { useRecoilState } from "recoil";
import { cartState } from "./atom";

// Utility functions

const cloneIndex = (items, _id) => ({
  clone: items.map((product) => ({ ...product })),
  index: items.findIndex((product) => product._id === _id)
});

export const AddToCart = () => {
  const [products, setProducts] = useRecoilState(cartState);

  return (product, qty) => {
    const { clone, index } = cloneIndex(products, product._id);

    if (index !== -1) {
      clone[index].amount = qty ;
      setProducts(clone);
    } else {
      setProducts([...clone, { ...product, amount: qty }]);
    }

    if (products.error) {
      throw products.error;
    }
  };
};

export const RemoveFromCart = () => {
  const [products, setProducts] = useRecoilState(cartState);

  return (_id) => {
    setProducts(products.filter((item) => item._id !== _id));
  };
};