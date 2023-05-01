import { NextPage } from "next";

import { useFetch } from "../../utils/UseFetch";
import apiUrls from "../../apiUrls";
import { useEffect, useState } from "react";
import { PagingPage } from "../../components/Paging/paging.model";
import { Category, Product } from "./shop.model";
import Box from "../../components/Base/Box";
import { useRouter } from "next/router";
import Sidebar, { SideBarSkeleton } from "../../components/Shop/Sidebar";
import ShopProduct from "../../components/Shop/ShopProduct";

const Shop: NextPage<Product> = ({}) => {
  const router = useRouter();
  const { category, search, sort, page } = router.query;
  const product = useFetch<PagingPage<Product>>(apiUrls.product, {
    category: category?.toString() ?? "",
    sort: sort?.toString() ?? "",
    search: search?.toString() ?? "",
    page: page?.toString() ?? "",
  });
  const categories = useFetch<Array<Category>>(apiUrls.categoryFilter);

  const [wishlist, setWishList] = useState(false);

  const handleUrl = (field: any, value: any) => {
    const query = { ...router.query, [field]: value };
    router.replace({ query: query });
  };

  return (
    <div className="container-fluid pt-5">
      <div className="row px-xl-5">
        <Box
          data={categories}
        
          placeholder={<SideBarSkeleton></SideBarSkeleton>}
        >
          <Sidebar
            categories={categories.data ?? []}
            onCheckCategory={(item) => handleUrl("category", item)}
          ></Sidebar>
        </Box>
        <ShopProduct
          wishlist={wishlist}
          data={product.data}
          search={search?.toString() ?? ""}
          sort={sort?.toString() ?? ""}
          onWishList={(item) => {
            setWishList(item);
          }}
          onSearch={(item) => {
            handleUrl("search", item);
          }}
          onSort={(item) => {
            handleUrl("sort", item);
          }}
          onPage={(page) => {
            handleUrl("page", page);
          }}
        ></ShopProduct>
      </div>
    </div>
  );
};

export default Shop;
