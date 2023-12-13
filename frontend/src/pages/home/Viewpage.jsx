import Dummyfeature from "./Dummyfeature";
import { Banner, Imagecarousel } from "../../components/Index";
import ProductLayout from "../../layout/ProductLayout";
import { useSelector } from "react-redux";
const Viewpage = () => {
  const data = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  // let categories = [...new Set(data.map((item) => item.category))];
  const categories = [...new Set(data.map((ele) => ele.category))];
console.log(categories);
  return (
    <div className="relative   max-sm:top-0 top-[45px]">
      <Banner />
      <Dummyfeature />
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
