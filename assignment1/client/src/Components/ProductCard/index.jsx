/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import '../../global_style.css';
import './style.css';

import { BsCartPlus, BsCartFill, BsQuestionCircleFill } from 'react-icons/bs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NotFound from './broken1.png';

/// products user => token => id // cart // products => {incart: true}
export default function ProductCart(props) {
  const { productData, user } = props;
  const [inCart, setInCart] = useState(productData.inCart);
  const navigate = useNavigate();
  const iconStyle = {
    color: '#20d1cb',
    fontSize: '2rem',
  };
  const addToCart = () => {
    if (user.loggedIn) {
      fetch(`/api/v1/cart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: productData.id,
        }),
      })
        .then((res) => res.json())
        .then(() => setInCart(true));
    } else {
      navigate('/login');
    }
  };
  const removeFromCart = () => {
    fetch(`/api/v1/cart/${productData.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(() => {
        setInCart(false);
      });
  };
  const viewProduct = () => {
    navigate(`/products/${productData.id}`);
  };
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className="card-container">
      <div className="product-img-cont">
        <img
          className="product-image"
          src={productData.image || NotFound}
          alt={productData.name}
          onError={(e) => {
            e.target.src = NotFound;
          }}
        />
      </div>
      <div className="card-category">
        <p>{productData.category_name}</p>
      </div>
      <div className="row">
        {inCart && (
          <div className="cart-icon">
            <BsCartFill style={iconStyle} onClick={() => removeFromCart()} />
          </div>
        )}

        {!inCart && (
          <div className="cart-icon">
            <BsCartPlus style={iconStyle} onClick={() => addToCart()} />
          </div>
        )}
        <div className="name-price">
          <h3 className="name">{productData.name}</h3>
          <h3 className="price">{productData.price}$</h3>
        </div>
        <div className="cart-icon">
          <BsQuestionCircleFill
            style={iconStyle}
            onClick={() => viewProduct()}
          />
        </div>
      </div>
    </div>
  );
}
