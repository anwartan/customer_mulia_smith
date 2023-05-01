import { useRouter } from "next/router";
import apiUrls from "../../apiUrls";
import { useFetch } from "../../utils/UseFetch";
import { Product } from "./shop.model";
import Image from "next/image";
import AdditionalInfo from "../../components/Shop/AdditionalInfo";
import parse from "html-react-parser";
const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useFetch<Product>(apiUrls.product + `/${id}`);

  return (
    <div className="container-fluid py-5">
      <div className="row px-xl-5">
        <div className="col-lg-5 pb-5">
          <div
            id="product-carousel"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner border">
              <div className="carousel-item active">
                <Image
                  className="w-100 h-100"
                  src={data?.full_image_path ?? "/img/placeholder.jpg"}
                  alt="Image"
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#product-carousel"
              data-slide="prev"
            >
              <i className="fa fa-2x fa-angle-left text-dark"></i>
            </a>
            <a
              className="carousel-control-next"
              href="#product-carousel"
              data-slide="next"
            >
              <i className="fa fa-2x fa-angle-right text-dark"></i>
            </a>
          </div>
        </div>

        <div className="col-lg-7 pb-5">
          <h3 className="font-weight-semi-bold">{data?.product_name}</h3>
          {/* <div className="d-flex mb-3">
            <div className="text-primary mr-2">
              <small className="fas fa-star"></small>
              <small className="fas fa-star"></small>
              <small className="fas fa-star"></small>
              <small className="fas fa-star-half-alt"></small>
              <small className="far fa-star"></small>
            </div>
            <small className="pt-1">(50 Reviews)</small>
          </div>
          <h3 className="font-weight-semi-bold mb-4">$150.00</h3> */}
          <p className="mb-4">{data?.product_summary}</p>
          {/* <div className="d-flex mb-3">
            <p className="text-dark font-weight-medium mb-0 mr-3">Sizes:</p>
            <form>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="size-1"
                  name="size"
                />
                <label className="custom-control-label" htmlFor="size-1">
                  XS
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="size-2"
                  name="size"
                />
                <label className="custom-control-label" htmlFor="size-2">
                  S
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="size-3"
                  name="size"
                />
                <label className="custom-control-label" htmlFor="size-3">
                  M
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="size-4"
                  name="size"
                />
                <label className="custom-control-label" htmlFor="size-4">
                  L
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="size-5"
                  name="size"
                />
                <label className="custom-control-label" htmlFor="size-5">
                  XL
                </label>
              </div>
            </form>
          </div>
          <div className="d-flex mb-4">
            <p className="text-dark font-weight-medium mb-0 mr-3">Colors:</p>
            <form>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="color-1"
                  name="color"
                />
                <label className="custom-control-label" htmlFor="color-1">
                  Black
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="color-2"
                  name="color"
                />
                <label className="custom-control-label" htmlFor="color-2">
                  White
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="color-3"
                  name="color"
                />
                <label className="custom-control-label" htmlFor="color-3">
                  Red
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="color-4"
                  name="color"
                />
                <label className="custom-control-label" htmlFor="color-4">
                  Blue
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="color-5"
                  name="color"
                />
                <label className="custom-control-label" htmlFor="color-5">
                  Green
                </label>
              </div>
            </form>
          </div> */}
          <div className="d-flex align-items-center mb-4 pt-2">
            {/* <div
              className="input-group quantity mr-3"
              style={{ width: "130px" }}
            >
              <div className="input-group-btn">
                <button className="btn btn-primary btn-minus">
                  <i className="fa fa-minus"></i>
                </button>
              </div>
              <input
                type="text"
                className="form-control bg-secondary text-center"
                value="1"
              />
              <div className="input-group-btn">
                <button className="btn btn-primary btn-plus">
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div> */}
            {data?.link_url_shopee && (
              <a
                target="_blank"
                href={data?.link_url_shopee}
                className="btn btn-primary px-3 mr-3"
              >
                <i className="fa fa-shopping-cart mr-1"></i> Go to Shopee
              </a>
            )}
            {data?.link_url_tokopedia && (
              <a
                target="_blank"
                href={data?.link_url_tokopedia}
                className="btn btn-primary px-3"
              >
                <i className="fa fa-shopping-cart mr-1"></i> Go to Tokopedia
              </a>
            )}

            {/* <button className="btn btn-primary px-3">
              <i className="fa fa-shopping-cart mr-1"></i> Add To Cart
            </button> */}
          </div>
          <div className="d-flex pt-2">
            <p className="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
            <div className="d-inline-flex">
              <a className="text-dark px-2" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="text-dark px-2" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="text-dark px-2" href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="text-dark px-2" href="">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row px-xl-5">
        <div className="col">
          <div className="nav nav-tabs justify-content-center border-secondary mb-4">
            <a
              className="nav-item nav-link active"
              data-toggle="tab"
              href="#tab-pane-1"
            >
              Description
            </a>
            <a
              className="nav-item nav-link"
              data-toggle="tab"
              href="#tab-pane-2"
            >
              Information
            </a>
            {/* <a
              className="nav-item nav-link"
              data-toggle="tab"
              href="#tab-pane-3"
            >
              Reviews (0)
            </a> */}
          </div>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="tab-pane-1">
              <h4 className="mb-3">Product Description</h4>
              <div>{parse(data?.product_description ?? "")}</div>
            </div>
            <div className="tab-pane fade" id="tab-pane-2">
              <AdditionalInfo
                data={data?.product_additional_infos}
              ></AdditionalInfo>
            </div>
            <div className="tab-pane fade" id="tab-pane-3">
              <div className="row">
                <div className="col-md-6">
                  <h4 className="mb-4">
                    1 review for "Colorful Stylish Shirt"
                  </h4>
                  <div className="media mb-4">
                    {/* <img
                      src="../img/user.jpg"
                      alt="Image"
                      className="img-fluid mr-3 mt-1"
                      style={{ width: "45px" }}
                    /> */}
                    <div className="media-body">
                      <h6>
                        John Doe
                        <small>
                          {" "}
                          - <i>01 Jan 2045</i>
                        </small>
                      </h6>
                      <div className="text-primary mb-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <i className="far fa-star"></i>
                      </div>
                      <p>
                        Diam amet duo labore stet elitr ea clita ipsum, tempor
                        labore accusam ipsum et no at. Kasd diam tempor rebum
                        magna dolores sed sed eirmod ipsum.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <h4 className="mb-4">Leave a review</h4>
                  <small>
                    Your email address will not be published. Required fields
                    are marked *
                  </small>
                  <div className="d-flex my-3">
                    <p className="mb-0 mr-2">Your Rating * :</p>
                    <div className="text-primary">
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                  </div>
                  <form>
                    <div className="form-group">
                      <label htmlFor="message">Your Review *</label>
                      <textarea
                        id="message"
                        cols={30}
                        rows={5}
                        className="form-control"
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Your Name *</label>
                      <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Your Email *</label>
                      <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group mb-0">
                      <input
                        type="submit"
                        value="Leave Your Review"
                        className="btn btn-primary px-3"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
