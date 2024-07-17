
function ProductCard ({ product }){
  return (
    <div className="bg-white shadow-lg rounded-md">
      <img src={product?.image} alt={product?.name} className="max-h-52 w-full rounded-md" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">Name:{product?.name}</h3>
        <p className="text-gray-600 mt-1 font-semibold">Description:{product?.short_description}</p>
        <p className="text-gray-600 mt-1 font-bold">Rs.{product?.price}</p>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-800 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
