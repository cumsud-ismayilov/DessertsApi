import { useState } from "react";
import Navbar from "./Layout/Navbar/Navbar";
import Products from "./components/Products/products";
import Basket from "./components/Basket/Basket";
function App() {
  const [searchVal , setSearchVal] = useState("")
  return (
    <div>
      <Navbar setSearchVal={setSearchVal}/>
      <main className="max-w-[1320px] w-[80%] mx-auto">
      <Products searchVal={searchVal}/>
      </main>
      <Basket/>
    </div>
  );
}

export default App;
