import Header from "./components/Header/Header";
import Banners from "./components/banners/banners"; // Corrected import
// import TraditionalClothesPage from "./components/TraditionalClothes/traditionalClothes";
import Home from "./components/Home";
import Product from "./components/Product/Product";
// import ProductDetails from "./compo";
import Footer from "./components/footer/footer"


function App() {
  return (
    <div>
      
      <Header />
      <Home />
      <Banners /> 
      <Product />
      {/* <ProductDetails /> */}
      <Footer />
      {/* <TraditionalClothesPage/> */}
    </div>
  );
}

export default App;
