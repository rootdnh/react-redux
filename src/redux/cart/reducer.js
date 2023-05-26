import CartActionTypes from "./actions-types";

const initialState = {
 products: [],
 productsTotalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
 switch (action.type) {
  case CartActionTypes.ADD_PRODUCT:

   const productsISAlreadyInCart = state.products.some(
    (product) => product.id === action.payload.id
   );

   if (productsISAlreadyInCart) {
    return {
     ...state,
     products: state.products.map((product) =>
      product.id === action.payload.id 
      ? { ...product, quantity: product.quantity + 1} : product
     ),
    };
   };
   return {
    ...state,
    products: [...state.products, {...action.payload, quantity: 1}]
  }
  case CartActionTypes.REMOVE_PRODUCT:
    return {
      ...state, 
      products: state.products.filter((product) => product.id !== action.paylod)
    }

  default:
   return state;
 }
};

export default cartReducer;
