import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RestaurantsListPage } from '../RestaurantsListPage';
import { Header } from '../Header';
import Footer from '../Footer';
import { Cart } from '../Cart';
import { RestaurantPage } from '../RestaurantPage';
import { Order } from '../Order';

import './App.scss';

export const App = ({ modalWindow, returnCartFromLS }) => {
  useEffect(() => {
    const cartLS = localStorage.getItem('cart');

    if (cartLS) {
      returnCartFromLS(JSON.parse(cartLS));
    }
  }, []);

  return (
    <>
      <Header />
      <main className="page">
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route path="/" exact component={RestaurantsListPage} />
          <Route path="/:uuid" component={RestaurantPage} />
        </Switch>
      </main>
      <Footer />
      {modalWindow && <Order />}
    </>
  );
};

App.propTypes = {
  modalWindow: PropTypes.bool.isRequired,
  returnCartFromLS: PropTypes.func.isRequired,
};
