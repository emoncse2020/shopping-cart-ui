import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";

const API_URL = "http://localhost:8000/products";
const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to load Data");
        const data = await res.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">🛒 Product Catalog</h1>

        {loading && <p>Loading ...</p>}
        {error && <p>Error ...</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductList key={product.id} product={product}></ProductList>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
