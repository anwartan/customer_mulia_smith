import { NextPage } from "next";
import Sidebar from "../components/shop/Sidebar";
import ShopProduct from "../components/shop/ShopProduct";

interface Props {}

const Shop: NextPage<Props> = ({}) => {
  return (
    <div className="container-fluid pt-5">
      <div className="row px-xl-5">
        <Sidebar></Sidebar>
        <ShopProduct></ShopProduct>
      </div>
    </div>
  );
};

export default Shop;
