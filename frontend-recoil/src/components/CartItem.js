import './CartItem.css';
import {Link} from 'react-router-dom';
import { RemoveFromCart } from '../recoil/cartState';
import { AddToCart } from '../recoil/cartState';

const CartItem = ({ item, qtyChangeHandler }) => {
  const removeFromCart = RemoveFromCart()
  const addTocart = AddToCart()
    return (
      
      <div className="cartitem">
        <div className="cartitem__image">
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <Link to={`/product/${item.product}`} className="cartItem__name">
          <p>{item.name}</p>
        </Link>
        <p className="cartitem__price">${item.price}</p>
        <select
          value={item.amount}
          onChange={(e) => addTocart(item,Number(e.target.value))}
          className="cartItem__select"
        >
          {[...Array(item.countInStock).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          ))}
        </select>
        <button
          className="cartItem__deleteBtn"
          onClick={() => removeFromCart(item._id)}
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    );
  };
  
  export default CartItem;
