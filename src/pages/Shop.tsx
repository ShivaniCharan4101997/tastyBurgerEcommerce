// display products from (menudata.json)
// add to cart btn
// category filter

import menuData from "@/menuData.json";
import ProductCard from "@/components/custom/ProductCard";

const Shop = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-yellow-700 text-center mb-10">
        Shop Our Delicious Collection
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {menuData.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
