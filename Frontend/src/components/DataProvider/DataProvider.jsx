import { createContext, useReducer, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../pages/Utility/firebase";
import { reducer } from "../../pages/Utility/reducer";
import { Type } from "../../pages/Utility/action.type";

export const DataContext = createContext();

const getInitialState = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const savedBasket = user ? JSON.parse(localStorage.getItem(`basket_${user.uid}`)) : [];
  return {
    basket: savedBasket || [],
    basketCount: 0,
    user: user || null,
  };
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, getInitialState());

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const userData = {
          uid: currentUser.uid,
          email: currentUser.email,
          name: currentUser.displayName || "User",
        };
        dispatch({
          type: Type.SET_USER,
          user: userData,
        });

        const storedBasket = JSON.parse(localStorage.getItem(`basket_${userData.uid}`));
        dispatch({
          type: Type.SET_BASKET,
          basket: storedBasket || [],
        });
      } else {
        dispatch({ type: Type.SET_USER, user: null });
        dispatch({ type: Type.CLEAR_BASKET });
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