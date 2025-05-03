import React from "react";
import { useLocation } from "react-router-dom"; // ✅ import this
import Routing from "./components/Router";  
import Header from "./components/Header/Header";
import { CartProvider } from "./components/CartContext";

function App() {
  const location = useLocation();
  const hideHeaderRoutes = ["/seller", '/admin', '/auth'];
   // 👈 add all routes where header should be hidden

  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  return (
    <CartProvider>
      {!shouldHideHeader && <Header />} {/* 👈 Conditionally render Header */}
      <Routing />
    </CartProvider>
  );
}

export default App;
