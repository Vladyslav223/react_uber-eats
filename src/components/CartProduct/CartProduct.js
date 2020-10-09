import React from 'react';
import PropTypes from 'prop-types';

import './CartProduct.scss';

const CartProduct = ({ product, changeQty }) => {
  const { price, title, imageUrl, amount, uuid } = product;

  return (
    <div className="cart-product">
      <img
        className="cart-product__img"
        src={imageUrl}
        alt="product"
      />
      <div className="cart-product__info">
        <span className="cart-product__price">{`${price} UAH`}</span>
        <span className="cart-product__title">{title}</span>
      </div>
      <div className="cart-product__amount">
        <button
          onClick={() => changeQty('-', uuid)}
          className="counter__change-amount"
          type="button"
          // onClick={decrementCounter}
        >
          <img
            src="./images/button-minus.svg"
            alt="icon minus"
          />
        </button>

        <div className="counter__amount">{amount}</div>

        <button
          onClick={() => changeQty('+', uuid)}
          className="counter__change-amount"
          type="button"
          // onClick={incrementCounter}
        >
          <img
            src="./images/button-plus.svg"
            alt="icon plus"
          />
        </button>
      </div>
    </div>
  );
};

export default CartProduct;

CartProduct.propTypes = {
  changeQty: PropTypes.func.isRequired,
  product: PropTypes.shape({
    price: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    uuid: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,

};
