import { createContext, useReducer, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../pages/Utility/firebase";
import { reducer } from "../../pages/Utility/reducer";
import { Type } from "../../pages/Utility/action.type";

export const DataContext = createContext();

// Read basket from localStorage when app starts
const getInitialState = () => {
  const savedBasket = localStorage.getItem("basket");
  return {
    basket: savedBasket ? JSON.parse(savedBasket) : [],
    basketCount: 0,
    user: null, // we’ll set this with Firebase
  };
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, getInitialState());

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch({
          type: Type.SET_USER,
          user: {
            uid: currentUser.uid,
            email: currentUser.email,
            name: currentUser.displayName || "User",
          },
        });
      } else {
        dispatch({ type: Type.SET_USER, user: null });
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <DataContext.Provider value={[state, dispatch]}>
      {children}
    </DataContext.Provider>
  );
};
