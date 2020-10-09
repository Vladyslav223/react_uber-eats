import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Input from '../Input';

import './Header.scss';

export class Header extends Component {
  state = {
    address: '',
    time: '',
    search: '',
    isMobileSearchVisible: false,
    isMobileDeliveryInfoVisible: false,
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  toggleSearch = () => this.setState(({ isMobileSearchVisible }) => ({
    isMobileSearchVisible: !isMobileSearchVisible,
    isMobileDeliveryInfoVisible: false,
  }));

  toggleDeliveryInfo = () => this.setState((prevState) => {
    const { isMobileDeliveryInfoVisible } = prevState;

    return {
      isMobileDeliveryInfoVisible: !isMobileDeliveryInfoVisible,
      isMobileSearchVisible: false,
    };
  });

  closeMobile = () => this.setState({
    isMobileDeliveryInfoVisible: false,
    isMobileSearchVisible: false,
  });

  render() {
    const {
      address,
      time,
      search,
      isMobileDeliveryInfoVisible,
      isMobileSearchVisible,
    } = this.state;

    const { totalCheckout, cart } = this.props;

    return (
      <header className="header">
        <div className="content">
          <div className="header__inner">
            <Link to="/">
              <img
                className="header__logo"
                src="./images/logo.svg"
                alt="Uber Eats"
              />
            </Link>

            <div className="header__delivery-info">
              <Input
                name="address"
                value={address}
                onChange={this.handleChange}
                placeholder="Address"
                iconUrl="./images/place.svg"
              />

              <Input
                name="time"
                value={time}
                onChange={this.handleChange}
                placeholder="Time"
                iconUrl=""
                type="time"
              />
            </div>

            <Input
              name="search"
              value={search}
              onChange={this.handleChange}
              placeholder="Search"
              iconUrl="./images/search.svg"
              className="header__search"
            />

            <div className="header__toogle-buttons">
              <button
                onClick={this.toggleDeliveryInfo}
                type="button"
                className="header__toogle-btn"
              >
                <img
                  src="./images/place.svg"
                  alt="place icon"
                  className="control__icon"
                />
              </button>
              <button
                onClick={this.toggleSearch}
                type="button"
                className="header__toogle-btn"
              >
                <img
                  src="./images/search.svg"
                  alt="search icon"
                  className="control__icon"
                />
              </button>
            </div>
            <div className="header__cart-wrap">
              {cart && cart.length
                ? (
                  <Link to="/cart">
                    <div className="header__cart">
                      <img
                        className="header__cart-img"
                        src="./images/cart.png"
                        alt="Uber Eats Cart"
                      />
                      <span className="header__cart-total">
                        {`${totalCheckout} UAH`}
                      </span>
                    </div>
                  </Link>
                )
                : (
                  <div className="header__cart">
                    <img
                      className="header__cart-img"
                      src="./images/cart.png"
                      alt="Uber Eats Cart"
                    />
                  </div>
                )
              }
              <span
                className={
                  !cart.length
                    ? 'header__cart-amount'
                    : 'header__cart-amount header__cart-amount-animate'
                }
              >
                {cart && cart.length}
              </span>
            </div>
            <span className="header__link">Sign In</span>
          </div>

          {(isMobileSearchVisible || isMobileDeliveryInfoVisible) && (
            <div className="header__mobile-controls mobile-controls">
              {isMobileSearchVisible && (
                <Input
                  label="Find"
                  name="search"
                  value={search}
                  onChange={this.handleChange}
                  placeholder="Search"
                  iconUrl="./images/search.svg"
                  isSmall={false}
                />
              )}

              {isMobileDeliveryInfoVisible && (
                <>
                  <Input
                    label="When"
                    name="time"
                    value={time}
                    onChange={this.handleChange}
                    placeholder="Time"
                    iconUrl=""
                    type="time"
                    isSmall={false}
                  />

                  <Input
                    label="To"
                    name="address"
                    value={address}
                    onChange={this.handleChange}
                    placeholder="Address"
                    iconUrl="./images/place.svg"
                    isSmall={false}
                  />
                </>
              )}

              <button
                onClick={this.closeMobile}
                type="button"
                className="mobile-controls__close"
              >
                <img src="./images/close.svg" alt="search icon" />
              </button>
            </div>
          )}
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  totalCheckout: PropTypes.number,
  cart: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape])).isRequired,
};

Header.defaultProps = {
  totalCheckout: 0,
};
