import { ChangeEvent, ReactNode, use, useEffect, useState } from "react";
import { Category } from "../../model/shop.model";
import { Callback } from "../../utils/types";
import { useRouter } from "next/router";
import Skeleton from "../Skeleton";

interface props {
  categories?: Array<Category>;
  onCheckCategory: Callback<String[]>;
}

const Sidebar = ({ categories = [], onCheckCategory }: props) => {
  const router = useRouter();

  const { category } = router.query;
  const [selectedCategories, setSelectedCategories] = useState<String[]>([]);

  const isCheck = (selectedCategory: Category): boolean => {
    return (
      selectedCategories.findIndex(
        (item) => item == selectedCategory.category_code
      ) !== -1
    );
  };

  function handleCategoryChange(event: ChangeEvent<HTMLInputElement>) {
    const categoryValue = event.target.value;
    const isChecked = event.target.checked;
    let newCategory: String[] = [];
    if (isChecked) {
      newCategory = [...selectedCategories, categoryValue];
    } else {
      newCategory = selectedCategories.filter(
        (selectedCategory) => selectedCategory !== categoryValue
      );
    }

    setSelectedCategories(newCategory);
    // Update the URL query params
    onCheckCategory(newCategory);
  }

  useEffect(() => {
    if (category) {
      setSelectedCategories(Array.isArray(category) ? category : [category]);
    } else {
      setSelectedCategories([]);
    }
  }, [category]);

  return (
    <div className="col-lg-3 col-md-12">
      <div className="border-bottom mb-4 pb-4">
        <h5 className="font-weight-semi-bold mb-4">Filter by category</h5>
        <form>
          {categories.map((item, index) => (
            <div
              key={index}
              className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
            >
              <input
                type="checkbox"
                className="custom-control-input"
                checked={isCheck(item)}
                id={item.category_code}
                value={item.category_code}
                onChange={(event) => {
                  handleCategoryChange(event);
                }}
              />
              <label
                className="custom-control-label"
                htmlFor={item.category_code}
              >
                {item.category_name}
              </label>
              <span className="badge border font-weight-normal">
                {item.product_count}
              </span>
            </div>
          ))}
        </form>
      </div>
      {/* <div className="border-bottom mb-4 pb-4">
        <h5 className="font-weight-semi-bold mb-4">Filter by price</h5>
        <form>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              checked
              id="price-all"
            />
            <label className="custom-control-label" htmlFor="price-all">
              All Price
            </label>
            <span className="badge border font-weight-normal">1000</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="price-1"
            />
            <label className="custom-control-label" htmlFor="price-1">
              $0 - $100
            </label>
            <span className="badge border font-weight-normal">150</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="price-2"
            />
            <label className="custom-control-label" htmlFor="price-2">
              $100 - $200
            </label>
            <span className="badge border font-weight-normal">295</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="price-3"
            />
            <label className="custom-control-label" htmlFor="price-3">
              $200 - $300
            </label>
            <span className="badge border font-weight-normal">246</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="price-4"
            />
            <label className="custom-control-label" htmlFor="price-4">
              $300 - $400
            </label>
            <span className="badge border font-weight-normal">145</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
            <input
              type="checkbox"
              className="custom-control-input"
              id="price-5"
            />
            <label className="custom-control-label" htmlFor="price-5">
              $400 - $500
            </label>
            <span className="badge border font-weight-normal">168</span>
          </div>
        </form>
      </div>
      <div className="border-bottom mb-4 pb-4">
        <h5 className="font-weight-semi-bold mb-4">Filter by color</h5>
        <form>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              checked
              id="color-all"
            />
            <label className="custom-control-label" htmlFor="price-all">
              All Color
            </label>
            <span className="badge border font-weight-normal">1000</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="color-1"
            />
            <label className="custom-control-label" htmlFor="color-1">
              Black
            </label>
            <span className="badge border font-weight-normal">150</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="color-2"
            />
            <label className="custom-control-label" htmlFor="color-2">
              White
            </label>
            <span className="badge border font-weight-normal">295</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="color-3"
            />
            <label className="custom-control-label" htmlFor="color-3">
              Red
            </label>
            <span className="badge border font-weight-normal">246</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="color-4"
            />
            <label className="custom-control-label" htmlFor="color-4">
              Blue
            </label>
            <span className="badge border font-weight-normal">145</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
            <input
              type="checkbox"
              className="custom-control-input"
              id="color-5"
            />
            <label className="custom-control-label" htmlFor="color-5">
              Green
            </label>
            <span className="badge border font-weight-normal">168</span>
          </div>
        </form>
      </div>
      <div className="mb-5">
        <h5 className="font-weight-semi-bold mb-4">Filter by size</h5>
        <form>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              checked
              id="size-all"
            />
            <label className="custom-control-label" htmlFor="size-all">
              All Size
            </label>
            <span className="badge border font-weight-normal">1000</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="size-1"
            />
            <label className="custom-control-label" htmlFor="size-1">
              XS
            </label>
            <span className="badge border font-weight-normal">150</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="size-2"
            />
            <label className="custom-control-label" htmlFor="size-2">
              S
            </label>
            <span className="badge border font-weight-normal">295</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="size-3"
            />
            <label className="custom-control-label" htmlFor="size-3">
              M
            </label>
            <span className="badge border font-weight-normal">246</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="size-4"
            />
            <label className="custom-control-label" htmlFor="size-4">
              L
            </label>
            <span className="badge border font-weight-normal">145</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
            <input
              type="checkbox"
              className="custom-control-input"
              id="size-5"
            />
            <label className="custom-control-label" htmlFor="size-5">
              XL
            </label>
            <span className="badge border font-weight-normal">168</span>
          </div>
        </form>
      </div> */}
    </div>
  );
};

export const SideBarSkeleton = () => {
  const items: ReactNode[] = [];

  for (let i = 0; i < 3; i++) {
    items.push(
      <div
        key={i}
        className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
      >
        <Skeleton></Skeleton>
      </div>
    );
  }

  return (
    <div className="col-lg-3 col-md-12">
      <div className="border-bottom mb-4 pb-4">
        <h5 className="font-weight-semi-bold mb-4">
          <Skeleton></Skeleton>
        </h5>
        {items}
      </div>
    </div>
  );
};

export const SidebarEmptyState = () => {
  return <div className="col-lg-3 col-md-12"></div>;
};

export default Sidebar;
