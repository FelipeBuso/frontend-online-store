// Estrutura chave cartProducts
// Será um array de objetos
// Cada objeto com a seguinte estrutura
/*
  {
    id_product: 
    name_product:
    quant_product:
  }
*/

const INITIAL_STATE = {
  categories: [],
  cartProducts: [],
};


const cart = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload],
      }
    case 'REMOVE_PRODUCT':
      const newListCartProducts = state.cartProducts; // faço o find aqui
      return {
        ...state,
        cartProducts: newListCartProducts,
      }
    case 'INCREASE_QUANT_PRODUCT':
      return state;
    case 'DECREASE_QUANT_PRODUCT':
      return state;
    case 'SAVE_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
      }
    default:
      return state;
  }
};

export default cart;
