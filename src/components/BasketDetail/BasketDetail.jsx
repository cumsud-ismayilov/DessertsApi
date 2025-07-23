import { useRef } from "react";

function BasketDetail({ setIsBasket, cart }) {
  const BasketRef = useRef(null);
  function closeBasket(e) {
    if (e.target === BasketRef.current) {
      setIsBasket(false);
    }
  }
  const totalPrice = cart.reduce((sum, item) => sum + (item.price || 0), 0);
  return (
    <section
      id="card-modal"
      className="bg-[#000000ab] fixed inset-[0]"
      ref={BasketRef}
      onClick={closeBasket}
    >
      <div
        id="quick-card"
        className="h-full bg-white w-[400px] shadow-lg p-[30px]"
      >
        <h2 className="font-[900] text-[25px]">Quick Card</h2>
        {cart.length > 0 ? (
          <>
            <ul className="flex gap-[10px] flex-col" id="cartListElem">
              {cart.map((product, index) => (
                <li key={index} className="flex gap-[20px] ">
                  <img
                    src={product.img}
                    alt="product"
                    className="w-[60px] object-cover"
                    onError={(e) => {
                      e.target.onerror = null; // Təkrar onError çağırılmasın
                      e.target.src =
                        "https://static.vecteezy.com/system/resources/previews/007/872/974/non_2x/file-not-found-illustration-with-confused-people-holding-big-magnifier-search-no-result-data-not-found-concept-can-be-used-for-website-landing-page-animation-etc-vector.jpg";
                    }}
                  />
                  <div className="w-full">
                    <h3 className="font-[600] text-[16px] mb-[7px]">
                      {product.name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <p>{product.price} AZN</p>
                      <div className="flex gap-[15px] items-center">
                        <button className="decrease-btn bg-[blue] w-[25px] h-[25px] text-white flex justify-center items-center cursor-pointer">
                          -
                        </button>
                        <span>2</span>
                        <button className="increase-btn bg-[blue] w-[25px] h-[25px] text-white flex justify-center items-center cursor-pointer">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-[20px]">
              <h3 className="font-[900] text-[20px]">
                Total price : <span id="totalprice">{totalPrice} AZN</span>
              </h3>
              <button className="bg-[blueviolet] p-[8px_25px] text-[#fff] text-[20px] cursor-pointer shadow-lg rounded-md">
                Buy
              </button>
            </div>
          </>
        ) : (
          <h2 className="font-[900] text-[25px] mb-[20px]" id="empty-message">
            Cart is empty
          </h2>
        )}
      </div>
    </section>
  );
}

export default BasketDetail;
