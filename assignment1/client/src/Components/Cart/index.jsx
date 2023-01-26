import { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import '../../global_style.css';
import './style.css';
import CartItem from '../CartItem';
import EmptyCart from '../CartItem/EmptyCart';

const getCart = () => fetch('/api/v1/cart').then((data) => data.json());

function Cart() {
  const [cartItem, setCartItem] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useOutletContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (user.loggedIn) {
      getCart().then((data) => {
        setCartItem(data);
      });
    } else {
      navigate('/');
    }
  }, []);
  
  return (
    <main className="wrapper">
      <section className="content">
        {cartItem.length ? (
          cartItem.map((item) => (
            <CartItem
              key={item.id}
              data={item}
              id={item.id}
              setCartItem={setCartItem}
            />
          ))
        ) : (
          <EmptyCart />
        )}
      </section>
    </main>
  );
}

export default Cart;
