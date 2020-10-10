import { connect } from 'react-redux';
import { Header } from './Header';

const mapStateToProps = state => ({
  totalCheckout: state.totalCheckout,
  totalItemCheckout: state.totalItemCheckout,
});

const Enhanced = connect(
  mapStateToProps,
)(Header);

export { Enhanced as Header };
