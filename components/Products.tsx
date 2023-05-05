import { Product } from "../model/shop.model";
import { WishlistItem } from "../pages/wishlist";
import { Callback } from "../utils/types";
import { ShopProductItem } from "../components/Shop/ShopProductItem";

interface Props {
  wishlist: Array<WishlistItem>;
  label: string;
  products: Array<Product>;
  onWishlist: Callback<string>;
}

function Products({ wishlist, label, products, onWishlist }: Props) {
  const isExistWishlist = (item: Product): boolean => {
    return wishlist.findIndex((x) => x.product.sku === item.sku) !== -1;
  };
  return (
    <div className="container-fluid pt-5">
      <div className="text-center mb-4">
        <h2 className="section-title px-5">
          <span className="px-2">{label}</span>
        </h2>
      </div>
      <div className="row px-xl-5 pb-3">
        {products.map((item, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <ShopProductItem
              item={item}
              wishList={isExistWishlist(item)}
              onWishList={onWishlist}
            ></ShopProductItem>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
