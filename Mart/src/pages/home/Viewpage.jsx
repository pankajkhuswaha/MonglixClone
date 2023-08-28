import React from "react";
import { Banner, Imagecarousel } from "../../components/Index";
import ProductLayout from "../../layout/ProductLayout";
import { useSelector } from "react-redux";
const Viewpage = () => {
  const data = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  console.log(data);
  const categories = [...new Set(data.map((item) => item.category))];
  console.log(categories);

  return (
    <div>
      <Banner />
      {categories.map((ele, id) => {
        return (
          <ProductLayout key={id} title={ele} load={loading}>
            <Imagecarousel
              load={loading}
              products={data.filter((item) => item.category === ele)}
            />
          </ProductLayout>
        );
      })}
    </div>
  );
};

export default Viewpage;
