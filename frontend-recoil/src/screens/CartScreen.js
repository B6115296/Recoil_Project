import "./CartScreen.css";

// Components
import CartItem from "../components/CartItem";
import { useRecoilValue } from "recoil";
import { cartState } from "../recoil/atom";
import { Link } from "react-router-dom";
import { RemoveFromCart } from "../recoil/cartState";
import { AddToCart } from "../recoil/cartState";

const CartScreen = () => {
  const addProduct = AddToCart()
  const cartItems = useRecoilValue(cartState);
  console.log(cartItems)

  const qtyChangeHandler = (id, qty) => {
    return (addProduct(id, qty))
  };


  const getCartCount = () => {
    return cartItems.reduce((amount, item) => Number(item.amount) + amount, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.amount, 0)
      .toFixed(2);
  };
  

  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <div>
            Your Cart Is Empty <Link to="/">Go Back</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item._id}
              item={item}
              qtyChangeHandler={qtyChangeHandler}
            />
          ))
        )}
      </div>
      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>Subtotal ({getCartCount()})</p>
          <p>${getCartSubTotal()}</p>
        </div>
        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
