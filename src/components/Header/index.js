import { connect } from 'react-redux';
import { Header } from './Header';

const mapStateToProps = state => ({
  totalCheckout: state.totalCheckout,
  cart: state.cart,
});

const Enhanced = connect(
  mapStateToProps,
)(Header);

export { Enhanced as Header };
