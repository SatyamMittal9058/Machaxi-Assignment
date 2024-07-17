
function Header() {
  return (
    <>
      <header className="text-center p-2">
        <h1 className="text-2xl font-bold">Product Listing</h1>
        <div className="flex justify-center items-center gap-2 my-3">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 w-1/2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring focus:ring-blue-500"
          />
          <button className="border-2 border-black rounded-lg p-2 text-center hover:bg-slate-100 font-semibold">
            Search
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
