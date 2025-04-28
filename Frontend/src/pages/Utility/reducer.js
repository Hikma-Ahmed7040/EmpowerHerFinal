import {Type} from './action.type';

export const initialState = {
      basket: [],
      basketCount: 0,
}

export const reducer = (state, action) => {
      switch (action.type) {
            case Type.ADD_TO_BASKET:
                  return {
                        ...state,
                        basket: [...state.basket, action.item],
                         

                  }

            default:
                  return state;


      }

}

