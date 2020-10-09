import React from 'react';
import PropTypes from 'prop-types';
import CartProduct from '../CartProduct/CartProduct';
import FormCheckout from '../FormCheckout/FormCheckout';
import './Cart.scss';

const Cart = ({ cart, changeAmount, totalCheckout }) => {
  const changeQty = (param, uuid) => {
    const currentProduct = cart.find(product => product.uuid === uuid);

    if (param === '+') {
      currentProduct.amount += 1;
    } else {
      currentProduct.amount -= 1;
    }

    changeAmount(currentProduct.amount, uuid);
  };

  return (
    <>
      <h1 className="cart__h1">Cart</h1>
      <div className="cart">
        <div className="cart__goods">
          {cart.map(product => (
            <CartProduct
              product={product}
              key={product.uuid}
              changeQty={changeQty}
            />
          ))}
          <span className="cart__total">{`Total:${totalCheckout} UAH`}</span>
        </div>
        <FormCheckout />
      </div>
    </>
  );
};

export default Cart;

Cart.propTypes = {
  totalCheckout: PropTypes.number.isRequired,
  cart: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  changeAmount: PropTypes.func.isRequired,
};
