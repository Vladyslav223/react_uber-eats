import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Loader from '../Loader';
import Error from '../Error';
import './Order.scss';
import { store } from '../../store';

export const Order = ({
  addToCart,
  deleteOrder,
  order,
  isLoading,
  error,
}) => {
  const [counter, setCount] = useState(1);
  const incrementCounter = () => setCount(counter + 1);
  const decrementCounter = () => setCount(counter - 1);

  const addToCartHandler = (product, amount) => {
    const payload = product;

    payload.amount = amount;
    addToCart(payload);
    localStorage.setItem('cart', JSON.stringify(store.getState().cart));
  };

  const { imageUrl, title, itemDescription, price } = order;

  const srcImage = imageUrl || './images/no_image.png';
  const srcTitle = title || 'no-image icon';

  if (isLoading) {
    return <Loader />;
  }

  return (
    <aside className="modal">
      <div className="modal-window">
        {error && <Error message={error} />}
        {!error && (
          <>
            <img className="modal-window__img" src={srcImage} alt={srcTitle} />
            <div className="modal-window__wrapper-content">
              <p className="modal-window__title">{`${price}₴`}</p>
              <p className="modal-window__title">{title}</p>
              <p className="modal-window__description">{itemDescription}</p>
              <div className="modal-window__footer">
                <div className="counter">
                  <button
                    className="counter__change-amount"
                    type="button"
                    onClick={decrementCounter}
                  >
                    <img
                      className="counter__button"
                      src="./images/button-minus.svg"
                      alt="icon minus"
                    />
                  </button>

                  <div className="counter__item">{counter}</div>
                  <button
                    className="counter__change-amount"
                    type="button"
                    onClick={incrementCounter}
                  >
                    <img
                      className="counter__button"
                      src="./images/button-plus.svg"
                      alt="icon plus"
                    />
                  </button>
                </div>
                <button
                  onClick={() => addToCartHandler(order, counter)}
                  type="button"
                  className="modal-window__button-order"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </>
        )
        }
        <div
          onClick={deleteOrder}
          onKeyPress={deleteOrder}
          role="presentation"
        >
          <img
            className="modal-window__button-close"
            src="./images/button-close.svg"
            alt="button close"
            title="close"
          />
        </div>
      </div>
    </aside>
  );
};

Order.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  deleteOrder: PropTypes.func.isRequired,
  order: PropTypes.shape().isRequired,
  addToCart: PropTypes.func.isRequired,
};

Order.defaultProps = {
  error: null,
  isLoading: false,
};
