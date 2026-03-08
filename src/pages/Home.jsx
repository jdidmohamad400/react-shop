import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";

function Home() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const filteredProducts = products
    .filter(product =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter(product =>
      category === "all" || product.category === category
    );

  return (
    <div className="container">

      <h1>Products</h1>

      <SearchBar setSearch={setSearch} />

      <Filter setCategory={setCategory} />

      <div className="products">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
}

export default Home;