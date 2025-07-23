import { useState } from "react";
import Navbar from "./Layout/Navbar/Navbar";
import Products from "./components/Products/products";
import Basket from "./components/Basket/Basket";
import BasketDetail from "./components/BasketDetail/BasketDetail";

function App() {
  const [searchVal, setSearchVal] = useState("");
  const [isBasket, setIsBasket] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]); // Yeni məhsulu səbətə əlavə et
  };

  return (
    <div>
      <Navbar setSearchVal={setSearchVal} />
      <main className="max-w-[1320px] w-[80%] mx-auto">
        <Products searchVal={searchVal} addToCart={addToCart}/>
      </main>
      <Basket setIsBasket={setIsBasket} />
      {isBasket && <BasketDetail setIsBasket={setIsBasket} cart={cart}/>}
    </div>
  );
}

export default App;
