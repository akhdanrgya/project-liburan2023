import Sidebar from "@/components/dashboard/Sidebar";
import AddProduct from "./AddProduct";

const Product = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-col">
        <AddProduct/>
      </div>
    </div>
  );
};

export default Product;
