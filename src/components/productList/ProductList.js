import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Mine</h1>
        <p className="pl-desc">
          These are the projects that i have been created on my own intrest!
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
      <div><a href="Yogesh_P J_Resume.pdf" download="Yogesh CV.pdf">
              <button>Get Resume!</button>
            </a></div>
    </div>
  );
};

export default ProductList;