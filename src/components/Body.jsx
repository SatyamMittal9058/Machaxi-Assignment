import Sidebar from "./Sidebar";
import Products from "./Products";

function Body() {
  return (
    <div className="w-full flex p-2">
      <div className="w-[30%] md:w-[25%]">
        <Sidebar/>
      </div>
      <div className="w-[70%] md:w-[75%]">
        <Products />
      </div>
    </div>
  );
}

export default Body;
