import Product from "../Product/product";
import { data } from "../../db/index";
function products({searchVal}) {
 
    
  return (
    <section id="products" className="grid grid-cols-4 gap-4">
        {
            data.filter(item => item.name.toLowerCase().includes(searchVal)).map(item => <Product name = {item.name} price = {item.price} img = {item.img}/>)
        }
    </section>
  );
}

export default products;
