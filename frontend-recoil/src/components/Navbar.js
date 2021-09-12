import '../components/Navbar.css'
import {Link} from 'react-router-dom';
import { totalQty } from '../recoil/selector'
import { useRecoilValue } from 'recoil';

const Navbar = ({click}) => {
    const qty = useRecoilValue(totalQty)

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <h2>MERN Shopping Cart</h2>
            </div>
            {/* links */}
            <ul className="navbar__links">
                <li>
                    <Link to ="/cart" className="cart__link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                            <span className="cartlogo__badge">{qty}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to ="/">
                        Shop
                    </Link>
                </li>
            </ul>

            <div className="hamburger__menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar
