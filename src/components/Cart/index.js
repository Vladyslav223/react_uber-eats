import { connect } from 'react-redux';
import { changeAmount, calculateCartTotal } from '../../store/actions';
import Cart from './Cart';

const mapStateToProps = state => ({
  cart: state.cart,
  totalCheckout: state.totalCheckout,
});

const mapDispatchToProps = dispatch => ({
  changeAmount: (amount, uuid) => {
    dispatch(changeAmount(amount, uuid));
    dispatch(calculateCartTotal());
  },
});

const Enhanced = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

export { Enhanced as Cart };
