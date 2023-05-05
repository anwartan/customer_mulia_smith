import Image from "next/image";
import Link from "next/link";
import routes from "../../config/Routes";
import { Product } from "../../model/shop.model";
import EmptyProduct from "../../public/icon/empty_product.svg";
import { Callback } from "../../utils/types";
import Skeleton from "../Skeleton";
interface Props {
  wishList: boolean;
  item: Product;
  onWishList: Callback<string>;
}

const ShopProductItem = ({ wishList, item, onWishList }: Props) => {
  return (
    <div className="card product-item border-0 mb-4">
      <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
        <Image
          className="img-fluid w-100"
          width={500}
          height={500}
          src={item.full_image_path}
          alt={item.image_path}
        />
        <div
          className="p-2"
          style={{
            position: "absolute",
            zIndex: 100,
            top: 0,
            right: 0,
          }}
        >
          <a
            href="javascript:void(0)"
            onClick={() => {
              onWishList(item.sku);
            }}
          >
            <i
              className={`${wishList ? "fas" : "far"} fa-heart text-primary`}
            ></i>
          </a>
        </div>
      </div>
      <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
        <h6 className="text-truncate mb-3">{item.product_name}</h6>
        <div className="d-flex justify-content-center">
          <h6>$123.00</h6>
          <h6 className="text-muted ml-2">
            <del>$123.00</del>
          </h6>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-between bg-light border">
        <Link
          href={`${routes.shopDetail}/${item.sku}`}
          className="btn btn-sm text-dark p-0"
        >
          <i className="fas fa-eye text-primary mr-1"></i>View Detail
        </Link>
        {/* <a href="" className="btn btn-sm text-dark p-0">
         <i className="fas fa-shopping-cart text-primary mr-1"></i>Add
         To Cart
       </a> */}
      </div>
    </div>
  );
};

const ShopProductItemEmptyState = () => {
  return (
    <div className="col-12 d-flex align-items-center flex-column pb-1">
      <Image
        alt={"empty_product"}
        src={EmptyProduct}
        width={300}
        height={300}
      ></Image>
      <h5 className="font-weight-semi-bold mb-4">Product is not found</h5>
    </div>
  );
};

const ShopProductItemSkeleton = () => {
  const items = [];

  for (let i = 0; i < 3; i++) {
    items.push(
      <div key={i} className="col-lg-4 col-md-6 col-sm-12 pb-1">
        <div className="card product-item border-0 mb-4" style={{ width: 250 }}>
          <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <Skeleton height={200}></Skeleton>
          </div>
          <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <Skeleton></Skeleton>
          </div>
          <div className="card-footer d-flex justify-content-between bg-light border">
            <Skeleton></Skeleton>
          </div>
        </div>
      </div>
    );
  }

  return <>{items}</>;
};

export { ShopProductItem, ShopProductItemEmptyState, ShopProductItemSkeleton };
