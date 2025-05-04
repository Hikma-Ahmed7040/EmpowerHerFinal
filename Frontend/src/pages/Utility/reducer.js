import { Type } from './action.type';

export const initialState = {
  basket: JSON.parse(localStorage.getItem('basket')) || [],
  basketCount: 0,
  user: JSON.parse(localStorage.getItem('user')) || null,
};

export const reducer = (state, action) => {
  let updatedBasket;

  switch (action.type) {
    case Type.SET_USER:
      localStorage.setItem('user', JSON.stringify(action.user));
      return {
        ...state,
        user: action.user,
      };

    case Type.ADD_TO_BASKET:
      const existingItem = state.basket.find((item) => item.id === action.item.id);
      if (!existingItem) {
        updatedBasket = [...state.basket, action.item];
      } else {
        updatedBasket = state.basket.map((item) =>
          item.id === action.item.id ? { ...item, amount: item.amount + 1 } : item
        );
      }
      localStorage.setItem('basket', JSON.stringify(updatedBasket));
      return { ...state, basket: updatedBasket };

    case Type.INCREMENT_ITEM:
      updatedBasket = state.basket.map((item) =>
        item.id === action.id ? { ...item, amount: item.amount + 1 } : item
      );
      localStorage.setItem('basket', JSON.stringify(updatedBasket));
      return { ...state, basket: updatedBasket };

    case Type.DECREMENT_ITEM:
      updatedBasket = state.basket
        .map((item) =>
          item.id === action.id ? { ...item, amount: Math.max(item.amount - 1, 1) } : item
        );
      localStorage.setItem('basket', JSON.stringify(updatedBasket));
      return { ...state, basket: updatedBasket };

    case Type.CLEAR_BASKET:
      localStorage.removeItem('basket');
      return { ...state, basket: [] };

    default:
      return state;
  }
};
