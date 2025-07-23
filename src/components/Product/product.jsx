function product( {product,setIsModal,setSelectedPro}) {
  const {img,name,price} = product
  return (
    <div className="p-[5px] shadow-sm ">
      <img
        className=" w-full h-[270px] object-cover cursor-pointer"
        src={img}
        alt="pizzasimg"
        onError={(e) => {
          e.target.onerror = null; // Təkrar onError çağırılmasın
          e.target.src =
            "https://static.vecteezy.com/system/resources/previews/007/872/974/non_2x/file-not-found-illustration-with-confused-people-holding-big-magnifier-search-no-result-data-not-found-concept-can-be-used-for-website-landing-page-animation-etc-vector.jpg";
        }}
        onClick={() => {
          setIsModal(true)
          setSelectedPro(product)
        }}
      />
      <div className="p-[30px]">
        <button className="cursor-pointer" aria-label="Add to cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 text-[#FFB703]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 
               1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243
               l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625
               10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0
               .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </button>
        <h3 className="text-[20px] font-[700] text-[#2D3142]">{name}</h3>
        <p className="text-[#2D3142] text-[15px]">{price} AZN</p>
      </div>
    </div>
  );
}

export default product;
