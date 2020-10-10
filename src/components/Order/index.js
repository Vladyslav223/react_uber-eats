import { connect } from 'react-redux';

import { Order } from './Order';
import {
  setOrder,
  addToCart,
  setModalWindow,
  calculateCartTotal,
} from '../../store/actions';
import {
  selectOrder,
  selectRestaurantsListError,
  selectIsLoading,
} from '../../store/selector';

const mapStateToProps = state => ({
  order: selectOrder(state),
  error: selectRestaurantsListError(state),
  isLoading: selectIsLoading(state),
});

const mapDispatchToProps = dispatch => ({
  deleteOrder: () => {
    dispatch(setModalWindow(false));
    dispatch(setOrder(null));
  },
  addToCart: (product) => {
    dispatch(addToCart(product));
    dispatch(calculateCartTotal());
    dispatch(setModalWindow(false));
  },
});

const Enhanced = connect(
  mapStateToProps,
  mapDispatchToProps
)(Order);

export { Enhanced as Order };
