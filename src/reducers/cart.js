// Estrutura chave cartProducts
// Será um array de objetos
// Cada objeto com a seguinte estrutura
/*
  {
    id: 
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
      let productObject = {};
      let positionAtCart = null;
      let isAlreadyAtCart = false;

      state.cartProducts.forEach((product, index) => {
        if (product.id === action.payload) {
          isAlreadyAtCart = true;
          positionAtCart = index;
        }
      });

      if (!isAlreadyAtCart) { // não existe no cart, estou add um novo produto
        productObject = {
          id: action.payload,
          quant_product: 1,
        };
        return {
          ...state,
          cartProducts: [...state.cartProducts, productObject],
        }
      }

      productObject = {
        id: action.payload,
        quant_product: state.cartProducts[positionAtCart].quant_product + 1,
      }
      const newCartProducts = [...state.cartProducts];
      newCartProducts[positionAtCart] = productObject;
      return {
        ...state,
        cartProducts: newCartProducts,
      }


    case 'REMOVE_PRODUCT':
      const newListCartProducts = state.cartProducts; // faço o find aqui
      return {
        ...state,
        cartProducts: newListCartProducts,
      }
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
