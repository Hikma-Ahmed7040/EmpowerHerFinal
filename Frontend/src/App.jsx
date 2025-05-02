import React from "react";
import Routing from "./components/Router";
import { CartProvider } from "./components/CartContext";

function App() {
  return (
    <CartProvider>
      <Routing />
    </CartProvider>
  );
}

export default App;
