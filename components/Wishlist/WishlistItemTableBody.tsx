import Image from "next/image";
import { WishlistItem } from "../../pages/wishlist";
import Link from "next/link";
import routes from "../../config/Routes";
import { Callback } from "../../utils/types";
import { useState } from "react";
import { formatDateFromMilliseconds } from "../../utils/Date";
import ProductStatusEnum from "../../enums/ProductStatusEnum";

interface Props {
  item: WishlistItem;
  onUpdateWishlist: Callback<string>;
}

const WishlistItemTableBody = ({ item, onUpdateWishlist }: Props) => {
  const getStatus = (status: ProductStatusEnum): string => {
    switch (status) {
      case ProductStatusEnum.SHOW:
        return "SHOW";
      case ProductStatusEnum.HIDE:
        return "HIDE";
      case ProductStatusEnum.DISABLE:
        return "OUT STOCK";
      case ProductStatusEnum.ENABLED:
        return "IN STOCK";
      default:
        return "";
    }
  };
  return (
    <tr>
      <td className="align-middle">
        <Image
          src={item.product.full_image_path}
          alt=""
          width={50}
          height={50}
        />{" "}
        <Link href={routes.shopDetail + "/" + item.product.sku}>
          {item.product.product_name}
        </Link>
      </td>
      <td className="align-middle">$150</td>
      <td className="align-middle">{getStatus(item.product.status)}</td>
      <td className="align-middle">
        {formatDateFromMilliseconds(item.product.created_at)}
      </td>
      <td className="align-middle">
        <button
          onClick={() => {
            onUpdateWishlist(item.product.sku);
          }}
          className="btn btn-sm btn-primary"
        >
          <i className="fa fa-times"></i>
        </button>
      </td>
    </tr>
  );
};

export const WishlistItemTableBodyEmptyState = () => {
  return (
    <tr>
      <td className="align-middle" colSpan={5}>
        There are no saved wishlists
      </td>
    </tr>
  );
};

export default WishlistItemTableBody;
