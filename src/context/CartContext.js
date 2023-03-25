import { createContext, useReducer, useEffect } from "react";

export const CartContext = createContext();

const initialState = {
  cartList: [],
  total: 0,
  isOrder:false
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartList: action.payload.products,
        total: action.payload.total,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartList: action.payload.products,
        total: action.payload.total,
      };
    case "CLEAR_CART":
      return {
        ...state,
        cartList: action.payload.products,
        total: action.payload.total,
      };
      case "ORDER_PRODUCTS":
      return {
        ...state,
        cartList: action.payload.products,
        total: action.payload.total,
        isOrder:action.payload.isOrdered
      };
    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    const updatedCartList = state.cartList.concat(product);
    const updatedTotal = state.total + product.price;

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCartList,
        total: updatedTotal,
      },
    });
  };

  const removeFromCart = (product) => {
    const updatedCartList = state.cartList.filter(
      (prod) => prod._id !== product._id
    );
    const updatedTotal = state.total - product.price;

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedCartList,
        total: updatedTotal,
      },
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
      payload: {
        products: [],
        total: 0,
      },
    });
  };

  const orderProducts = () => {
    dispatch({
      type: "ORDER_PRODUCTS",
      payload: {
        products: [],
        total: 0,
        isOrdered:true
      },
    });
  };

  useEffect(() => {
    const productsFromStorage = JSON.parse(localStorage.getItem("cartList"));
    const totalFromStorage = JSON.parse(localStorage.getItem("total"));

    if (productsFromStorage && totalFromStorage) {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          products: productsFromStorage,
          total: totalFromStorage,
        },
      });
    }
  }, []);

  useEffect(() => {
    if (state.cartList.length > 0) {
      localStorage.setItem("cartList", JSON.stringify(state.cartList));
      localStorage.setItem("total", JSON.stringify(state.total));
    } else {
      localStorage.removeItem("cartList");
      localStorage.removeItem("total");
    }
  }, [state.cartList, state.total]);


  const value = {
    cartList: state.cartList,
    total: state.total,
    removeFromCart,
    addToCart,
    clearCart,
    orderProducts
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
