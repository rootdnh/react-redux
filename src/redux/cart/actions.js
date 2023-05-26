import CartActionTypes from "./actions-types";

export const addProductToCart = (payload) => ({
 type: CartActionTypes.ADD_PRODUCT,
 payload,
});

export const removeProductFromCart = (payload) => ({
 type: CartActionTypes.REMOVE_PRODUCT,
 payload,
});
