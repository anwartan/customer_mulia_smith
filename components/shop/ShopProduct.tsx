import { useState } from "react";

import { Callback } from "../../utils/types";
import Pagination from "../Paging";
import { PagingPage } from "../Paging/paging.model";

import { WishlistItem } from "../../pages/wishlist";
import { FetchValue } from "../../utils/UseFetch";
import Box from "../Base/Box";
import ShopProductItem, {
  ShopProductItemEmptyState,
  ShopProductItemSkeleton,
} from "./ShopProductItem";
import { Product } from "../../model/shop.model";

interface props {
  product: FetchValue<PagingPage<Product>>;
  data: PagingPage<Product> | null;
  search: string;
  sort: string;
  wishlist: Array<WishlistItem>;
  onWishList: Callback<string>;
  onSearch: Callback<string>;
  onSort: Callback<string>;
  onPage: Callback<number>;
}

export const SORT_NEWEST = "Newest";
export const SORT_OLDEST = "Oldest";

const ShopProduct = ({
  product,
  data,
  search = "",
  sort,
  wishlist,
  onWishList,
  onSearch,
  onSort,
  onPage,
}: props) => {
  const sorts = [SORT_NEWEST, SORT_OLDEST];

  const [searchTerm, setSearchTerm] = useState(search);

  const isExistWishlist = (item: Product): boolean => {
    return wishlist.findIndex((x) => x.product.sku === item.sku) !== -1;
  };

  return (
    <div className="col-lg-9 col-md-12">
      <div className="row pb-3">
        <div className="col-12 pb-1">
          <div className="d-flex align-items-center justify-content-end mb-4">
            {/* <form
              onSubmit={(event) => {
                event.preventDefault();
                onSearch(searchTerm);
              }}
            >
              <div className="input-group">
                <input
                  type="text"
                  value={searchTerm}
                  onInput={(event) => {
                    event.preventDefault();
                    const { value } = event.currentTarget;
                    setSearchTerm(value);
                  }}
                  className="form-control"
                  placeholder="Search by name"
                />
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-primary">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
            </form> */}

            <div className="dropdown ml-4">
              <button
                className="btn border dropdown-toggle"
                type="button"
                id="triggerId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort by
              </button>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="triggerId"
              >
                {sorts.map((item, index) => (
                  <div
                    key={index}
                    className={`dropdown-item ${item == sort && "active"}`}
                    onClick={() => {
                      onSort(item);
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Box
          data={product}
          emptyState={<ShopProductItemEmptyState></ShopProductItemEmptyState>}
          placeholder={<ShopProductItemSkeleton></ShopProductItemSkeleton>}
        >
          {product?.data?.data?.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 pb-1">
              <ShopProductItem
                item={item}
                wishList={isExistWishlist(item)}
                onWishList={onWishList}
              ></ShopProductItem>
            </div>
          ))}
        </Box>

        <div className="col-12 pb-1">
          <Pagination
            currentPage={data?.pagination.current_page ?? 1}
            totalPages={Math.ceil(
              (data?.pagination.total ?? 1) / (data?.pagination.per_page ?? 1)
            )}
            onPageChange={onPage}
          ></Pagination>
        </div>
      </div>
    </div>
  );
};

export default ShopProduct;
