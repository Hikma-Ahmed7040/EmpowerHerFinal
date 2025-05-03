import {Type} from './action.type';
export const initialState = {
      basket: [],
      basketCount: 0,
}
export const reducer = (state, action) => {
      switch (action.type) {
        case Type.ADD_TO_BASKET:
          const existingItem = state.basket.find((item) => item.id === action.item.id);
          if (!existingItem) {
            return {
              ...state,
              basket: [...state.basket, action.item], // item already includes amount: 1
            };
          } else {
            const updatedBasket = state.basket.map((item) =>
              item.id === action.item.id
                ? { ...item, amount: item.amount + 1 }
                : item
            );
            return {
              ...state,
              basket: updatedBasket,
            };
          }
    
        // Optional: Handle increment/decrement if needed
    
        default:
          return state;
      }
    };
    