import "./HomeScreen.css";
import { useRecoilState, useRecoilValue,useSetRecoilState } from "recoil";
import { listP } from "../recoil/selector";
// Components
import Product from "../components/Product";

import { StateProduct } from "../recoil/selector";

const HomeScreen = () => {

    const list = useRecoilValue(listP)
    const products = list.data
    console.log(products)
  
  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Recoil Product</h2>
      <div className="homescreen__products">
        {
          products.map((product) => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
              countInStock={product.countInStock}
            />
          ))
        }
      </div>
    </div>
  );
};

export default HomeScreen;
