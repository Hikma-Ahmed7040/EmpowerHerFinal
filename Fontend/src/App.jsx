import React from "react";
import Routing from "./components/Router";
import { CartProvider } from "./components/CartContext"; // Make sure path is correct

function App() {
  return (
    <CartProvider>
      <Routing />
    </CartProvider>
  );
}

export default App;
