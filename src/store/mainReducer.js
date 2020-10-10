import { ACTION_TYPES } from './actions';

const initialState = {
  restaurantsListData: null,
  restaurantPageData: null,
  isLoading: false,
  error: null,
  order: {},
  showModalWindow: false,
  cart: [],
  totalCheckout: 0,
  totalItemCheckout: 0,
};

export function mainReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.SAVE_RESTAURANTS: {
      const { payload } = action;

      return ({
        ...state,
        error: null,
        restaurantsListData: payload,
        restaurantPageData: null,
      });
    }

    case ACTION_TYPES.SAVE_RESTAURANT_PAGE: {
      const { payload } = action;

      return ({
        ...state,
        error: null,
        restaurantPageData: payload,
      });
    }

    case ACTION_TYPES.SET_LOAD_RESTAURANTS_ERROR: {
      const { payload } = action;

      return ({
        ...state,
        error: payload,
        restaurantsListData: null,
        restaurantPage: null,
        order: null,
      });
    }

    case ACTION_TYPES.START_LOADING: {
      return ({
        ...state,
        isLoading: true,
      });
    }

    case ACTION_TYPES.STOP_LOADING: {
      return ({
        ...state,
        isLoading: false,
      });
    }

    case ACTION_TYPES.SET_ORDER: {
      const { payload } = action;

      return ({
        ...state,
        order: payload,
      });
    }

    case ACTION_TYPES.ADD_TO_CART: {
      const { payload } = action;
      const doWeHave = state.cart
        .find(product => product && product.uuid === payload.uuid);

      if (doWeHave) {
        doWeHave.amount += payload.amount;

        return ({
          ...state,
        });
      }

      return ({
        ...state,
        cart: [...state.cart, payload],
      });
    }

    case ACTION_TYPES.CHANGE_AMOUNT: {
      const { payload } = action;
      const curentProduct = state.cart
        .find(product => product.uuid === payload.uuid);

      curentProduct.amount = payload.amount;
      if (!payload.amount) {
        const newGoodsList = state.cart
          .filter(product => product.uuid !== curentProduct.uuid);

        return ({
          ...state,
          cart: [...newGoodsList],
        });
      }

      return ({
        ...state,
      });
    }

    case ACTION_TYPES.RETURN_CART: {
      const { payload } = action;

      return ({
        ...state,
        cart: payload,
      });
    }

    case ACTION_TYPES.CALCULATE_CART_TOTAL: {
      const { cart } = state;
      let productSum = 0;
      let productQty = 0;

      cart.forEach((product) => {
        productSum += product.amount * product.price;
        productQty += product.amount;
      });

      return ({
        ...state,
        totalCheckout: productSum,
        totalItemCheckout: productQty,
      });
    }

    case ACTION_TYPES.SET_MODAL_WINDOW: {
      const { payload } = action;

      return ({
        ...state,
        showModalWindow: payload,
      });
    }

    default:
      return state;
  }
}
