

function Navbar({setSearchVal}) {
  function inputHandler(e) {
    setSearchVal(e.target.value)
  }
  return (
    <header className="flex justify-between items-center  px-[7rem] mb-[50px] shadow-lg">
      <img src="/public/pageLogo.png" alt="pagelogo" className="w-20 h-20 object-contain"/>
      <input type="text" placeholder="Search desserts..." className="shadow-md outline-none py-[7px] px-[30px] border-[#FFB703] border-2 rounded-md text-[#2D3142]" onChange={inputHandler}/>
    </header>
  )
}

export default Navbar
