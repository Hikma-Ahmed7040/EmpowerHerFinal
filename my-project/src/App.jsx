import Header from "./components/Header/Header";
import styles from "./App.module.css"; // Corrected import
import Banners from "./components/banners/banners"; // Corrected import
import Home from "./components/Home";
import Product from "./components/Product/Product";
import Footer from "./components/footer/footer"


function App() {
  return (
    <div>
      
      <Header />
      <Home />
      <Banners /> 
      <h3 className={styles.collectionsTitle}>
        <span>All Collections</span>
      </h3>
      <Product />
      {/* <ProductDetails /> */}
      <Footer />
      {/* <TraditionalClothesPage/> */}
    </div>
  );
}

export default App;
