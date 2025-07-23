import { useState } from "react";
import Product from "../Product/product";
import { data } from "../../db/index";
import DetailModal from "../DetailModal/DetailModal";

function products({searchVal,addToCart }) {
 const [isModal, setIsModal] = useState(false)
 const [selectedPro, setSelectedPro] = useState({})
    
  return (
    <section id="products" className="grid grid-cols-4 gap-4">
        {
            data.filter(item => item.name.toLowerCase().includes(searchVal)).map(item => <Product  product = {item} setSelectedPro = {setSelectedPro} setIsModal = {setIsModal} key ={item.id} addToCart={addToCart}/>)
        }
        {isModal && <DetailModal setIsModal= {setIsModal} selectedPro = {selectedPro}/>}
    </section>
  );
}

export default products;
