import * as productConstants from "../constants/productConstants";

//gets all products
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case productConstants.PRODUCT_LIST_REQUEST:
      return { loading: true };
    case productConstants.PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case productConstants.PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//gets individual product
export const productDetailReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case productConstants.PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case productConstants.PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case productConstants.PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
