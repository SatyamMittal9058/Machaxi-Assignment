function Sidebar() {
  return (
    <div className="bg-white shadow-lg h-full p-2">
      <h2 className="text-xl font-semibold my-2 text-center">Categories</h2>
      <ul className="space-y-2">
        <li className="w-full text-left p-2 rounded-lg hover:bg-gray-300">
          Electronics
        </li>
        <li className="w-full text-left p-2 rounded-lg hover:bg-gray-300">
          Books
        </li>
        <li className="w-full text-left p-2 rounded-lg hover:bg-gray-300">
          Clothing
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
