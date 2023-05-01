import { ChangeEventHandler, ReactNode, use, useEffect, useState } from "react";
import { Product } from "../../pages/shop";
import { PagingPage } from "../Paging/paging.model";
import Image from "next/image";
import Pagination from "../Paging";
import { Callback } from "../../utils/types";
import Link from "next/link";
import SkeletonLayout, { Skeleton, SkeletonItem } from "../Skeleton";

interface props {
  data: PagingPage<Product> | null;
  search: string;
  sort: string;
  wishlist: boolean;
  onWishList: Callback<boolean>;
  onSearch: Callback<string>;
  onSort: Callback<string>;
  onPage: Callback<number>;
}

export const SORT_NEWEST = "Newest";
export const SORT_OLDEST = "Oldest";

const ShopProduct = ({
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
        {data?.data.map((item, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 pb-1">
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
                      onWishList(!wishlist);
                    }}
                  >
                    <i
                      className={`${
                        wishlist ? "fas" : "far"
                      } fa-heart text-primary`}
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
                  href={`/shop/${item.sku}`}
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
          </div>
        ))}
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
