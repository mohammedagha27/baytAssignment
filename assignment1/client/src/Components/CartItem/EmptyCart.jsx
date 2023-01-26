import { Link } from 'react-router-dom';
import { FaOpencart } from 'react-icons/fa';
import { IoMdCart } from 'react-icons/io';

import './style.css';

function EmptyCart() {
  return (
    <div className="empty__cart">
      <FaOpencart className="empty__cart_icon" />
      <div className="empty__cart__details">
        <h1>Your cart is currently empty!</h1>
        <p>
          Before proceed to checkout, you must add some products to your cart.
        </p>
        <p>You will find a lot of interesting products on our shop page</p>
      </div>
      <Link to="/products" className="link">
        <button type="button" className="shop__btn">
          <IoMdCart />
          RETURN TO SHOP
        </button>
      </Link>
    </div>
  );
}

export default EmptyCart;
