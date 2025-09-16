const ProductList = ({ product }) => {
  return (
    <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className="px-4 py-2">
        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
          {product.name}
        </h1>

        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {product.description}
        </p>
      </div>

      <div className="relative">
        <img
          className="object-contain w-full min-h-48 mt-2"
          src={product.image}
          alt={product.name}
        />
        <h1 className="text-lg w-10 h-10 flex justify-center items-center bg-gray-900 rounded-full font-bold text-white absolute top-1 right-0 ">
          {product.rating}
        </h1>
      </div>

      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        {/* Left section */}
        <div>
          <h1 className="text-lg font-bold text-white">$ {product.price}</h1>
          <p className="text-sm text-gray-300">{product.category}</p>
        </div>

        {/* Right section */}
        <button className="px-3 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductList;
