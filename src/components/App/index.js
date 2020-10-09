import { connect } from 'react-redux';
import { returnCartFromLS, calculateCartTotal } from '../../store/actions';
import { App } from './App';
import {
  selectOrder,
  selectStateModalWindow,
} from '../../store/selector';

const mapStateToProps = state => ({
  order: selectOrder(state),
  modalWindow: selectStateModalWindow(state),
  cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
  returnCartFromLS: (cart) => {
    dispatch(returnCartFromLS(cart));
    dispatch(calculateCartTotal());
  },
});

const Enhanced = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export { Enhanced as App };
