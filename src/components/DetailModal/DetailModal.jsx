import { useRef } from "react";

function DetailModal({setIsModal , selectedPro}) {
    const modalRef = useRef(null)
    function closeModal(e) {
        if (e.target === modalRef.current) {
            setIsModal(false)
        }
    }
  return (
    <section
      id="detailModal"
      className="bg-[#000000c9] fixed inset-[0] flex justify-center items-center"
      ref = {modalRef}
      onClick={closeModal}
    >
      <div className="max-w-[1000px] md:h-[550px] grid md:grid-cols-2 grid-cols-1 gap-[30px] bg-[#fff] p-[50px]">
        <div className="w-full h-full">
          <img src={selectedPro.img} alt="product" onError={(e) => {
          e.target.onerror = null; 
          e.target.src =
            "https://static.vecteezy.com/system/resources/previews/007/872/974/non_2x/file-not-found-illustration-with-confused-people-holding-big-magnifier-search-no-result-data-not-found-concept-can-be-used-for-website-landing-page-animation-etc-vector.jpg";
        }}  />
        </div>
        <div className="flex flex-col gap-[10px]">
         <h2 className="font-[900] text-[25px]">{selectedPro.name}</h2>
         <p>{selectedPro.dsc}</p>
         <p>Price : {selectedPro.price}AZN</p>
        <button id="addToCartBtn" className="bg-[violet] p-[6px_20px] cursor-pointer">Add To Cart</button>
        </div>
      </div>
    </section>
  );
}

export default DetailModal;
