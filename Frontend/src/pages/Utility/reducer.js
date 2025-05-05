// ✅ 2. reducer.js (updated to support SET_BASKET and user-specific basket saving)
import { Type } from './action.type';

export const reducer = (state, action) => {
  let updatedBasket;
  const user = state.user;
  const basketKey = user ? `basket_${user.uid}` : 'basket';

  switch (action.type) {
    case Type.SET_USER:
      localStorage.setItem('user', JSON.stringify(action.user));
      return {
        ...state,
        user: action.user,
      };

    case Type.SET_BASKET:
      return {
        ...state,
        basket: action.basket,
      };

    case Type.ADD_TO_BASKET:
      const exists = state.basket.find((item) => item.id === action.item.id);
      if (!exists) {
        updatedBasket = [...state.basket, action.item];
      } else {
        updatedBasket = state.basket.map((item) =>
          item.id === action.item.id ? { ...item, amount: item.amount + 1 } : item
        );
      }
      localStorage.setItem(basketKey, JSON.stringify(updatedBasket));
      return { ...state, basket: updatedBasket };

    case Type.INCREMENT_ITEM:
      updatedBasket = state.basket.map((item) =>
        item.id === action.id ? { ...item, amount: item.amount + 1 } : item
      );
      localStorage.setItem(basketKey, JSON.stringify(updatedBasket));
      return { ...state, basket: updatedBasket };

    case Type.DECREMENT_ITEM:
      updatedBasket = state.basket.map((item) =>
        item.id === action.id ? { ...item, amount: Math.max(item.amount - 1, 1) } : item
      );
      localStorage.setItem(basketKey, JSON.stringify(updatedBasket));
      return { ...state, basket: updatedBasket };

    case Type.CLEAR_BASKET:
      localStorage.removeItem(basketKey);
      return { ...state, basket: [] };

    default:
      return state;
  }
};