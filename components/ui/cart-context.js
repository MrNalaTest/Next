"use client";
import { createContext, useContext, useEffect, useReducer } from 'react';

// Crea el contexto
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

// Estado inicial del carrito
const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

// Reducer para manejar las acciones del carrito
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      let updatedItems;

      if (existingItem) {
        // Si el producto ya está en el carrito, aumentamos la cantidad
        updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Si es un nuevo producto, lo agregamos al carrito
        updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
      }

      const updatedTotalPrice = updatedItems.reduce(
        (acc, item) => acc + (item.price * item.quantity),
        0
      );

      const updatedTotalQuantity = updatedItems.reduce(
        (acc, item) => acc + item.quantity,
        0
      );

      return {
        ...state,
        items: updatedItems,
        totalQuantity: updatedTotalQuantity,
        totalPrice: updatedTotalPrice,
      };
    }

    case 'REMOVE_FROM_CART': {
      const filteredItems = state.items.filter(item => item.id !== action.payload);

      const updatedTotalPrice = filteredItems.reduce(
        (acc, item) => acc + (item.price * item.quantity),
        0
      );

      const updatedTotalQuantity = filteredItems.reduce(
        (acc, item) => acc + item.quantity,
        0
      );

      return {
        ...state,
        items: filteredItems,
        totalQuantity: updatedTotalQuantity,
        totalPrice: updatedTotalPrice,
      };
    }

    case 'INCREASE_QUANTITY': {
      const updatedItems = state.items.map(item =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      );

      const updatedTotalPrice = updatedItems.reduce(
        (acc, item) => acc + (item.price * item.quantity),
        0
      );

      const updatedTotalQuantity = updatedItems.reduce(
        (acc, item) => acc + item.quantity,
        0
      );

      return {
        ...state,
        items: updatedItems,
        totalQuantity: updatedTotalQuantity,
        totalPrice: updatedTotalPrice,
      };
    }

    case 'DECREASE_QUANTITY': {
      const updatedItems = state.items
        .map(item =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0);

      const updatedTotalPrice = updatedItems.reduce(
        (acc, item) => acc + (item.price * item.quantity),
        0
      );

      const updatedTotalQuantity = updatedItems.reduce(
        (acc, item) => acc + item.quantity,
        0
      );

      return {
        ...state,
        items: updatedItems,
        totalQuantity: updatedTotalQuantity,
        totalPrice: updatedTotalPrice,
      };
    }

    case 'LOAD_CART':
      return {
        ...state,
        ...action.payload, // Carga los datos del carrito desde LocalStorage
      };

    default:
      return state;
  }
};

// Proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        if (parsedCart && parsedCart.items) {
          dispatch({ type: 'LOAD_CART', payload: parsedCart });
        }
      } catch (error) {
        console.error("Error parsing cart data from localStorage:", error);
      }
    }
  }, []);

  useEffect(() => {
    if (cart.items.length > 0) {
      const { items, totalQuantity, totalPrice } = cart;
      const cartToStore = { items, totalQuantity, totalPrice };
      localStorage.setItem('cart', JSON.stringify(cartToStore));
    }
  }, [cart.items, cart.totalQuantity, cart.totalPrice]);

  const addToCart = (product) => {
    // Asegúrate de que el precio se pase como número
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, price: Number(product.price) } });
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const increaseQuantity = (id) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: id });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: id });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
