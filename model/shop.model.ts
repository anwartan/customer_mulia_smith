import ProductStatusEnum from "../enums/ProductStatusEnum";

export interface ProductAdditionalInfo {
  label: string;
  value: string;
}
export interface Product {
  product_name: string;
  product_description: string;
  sku: string;
  image_path: string;
  status: ProductStatusEnum;
  link_url_shopee: string;
  link_url_tokopedia: string;
  created_at: number;
  updated_at: number;
  full_image_path: string;
  product_summary: string;
  product_additional_infos: Array<ProductAdditionalInfo>;
}

export interface Category {
  uuid: string;
  category_name: string;
  category_code: string;
  status: number;
  product_count: number;
}
