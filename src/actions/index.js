const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const INCREASE_QUANT_PRODUCT = 'INCREASE_QUANT_PRODUCT';
const DECREASE_QUANT_PRODUCT = 'DECREASE_QUANT_PRODUCT';
const SAVE_CATEGORIES = 'SAVE_CATEGORIES';

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

const saveCategories = (categories) => ({
  type: SAVE_CATEGORIES,
  payload: categories,
});

export const getCategories = () => async (dispatch) => {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const json = await response.json();
  dispatch(saveCategories(json));
}




