const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const INCREASE_QUANT_PRODUCT = 'INCREASE_QUANT_PRODUCT';
const DECREASE_QUANT_PRODUCT = 'DECREASE_QUANT_PRODUCT';


export const addProduct = (newProduct) => ({
  type: ADD_PRODUCT,
  payload: newProduct,
});

export const removeProduct = (productToRemoveFromCart) => ({
  type: REMOVE_PRODUCT,
  payload: productToRemoveFromCart,
});

export const increaseQuantProduct = (productToIncreaseQuant) => ({
  type: INCREASE_QUANT_PRODUCT,
  payload: productToIncreaseQuant,
});

export const decreaseQuantProduct = (productToDecreaseQuant) => ({
  type: DECREASE_QUANT_PRODUCT,
  payload: productToDecreaseQuant,
});



