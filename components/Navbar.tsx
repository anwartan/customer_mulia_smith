import Link from "next/link";
import { useRouter } from "next/router";
import AuthService from "../services/auth.service";
import routes from "../config/Routes";
import NavItem from "./NavItem";
import { useFetch } from "../utils/UseFetch";
import apiUrls from "../config/ApiUrls";
import Image from "next/image";

interface Promotion {
  uuid: string;
  promotion_title: string;
  promotion_description: string;
  promotion_url: string;
  promotion_image_url: string;
  status: number;
  full_image_path: string;
}

const Navbar = ({ showCarousel = false }) => {
  const promotion = useFetch<Array<Promotion>>(apiUrls.promotionActive);

  return (
    <div className="container-fluid mb-5">
      <div className="row border-top px-xl-5">
        {/* <div className="col-lg-3 d-none d-lg-block">
          <a
            className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
            data-toggle="collapse"
            href="#navbar-vertical"
            style={{ height: "65px", marginTop: "-1px", padding: "0 30px" }}
          >
            <h6 className="m-0">Categories</h6>
            <i className="fa fa-angle-down text-dark"></i>
          </a>
          <nav
            className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0"
            id="navbar-vertical"
          >
            <div
              className="navbar-nav w-100 overflow-hidden"
              style={{ height: "410px" }}
            >
              <div className="nav-item dropdown">
                <a href="#" className="nav-link" data-toggle="dropdown">
                  Dresses <i className="fa fa-angle-down float-right mt-1"></i>
                </a>
                <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                  <a href="" className="dropdown-item">
                    Men's Dresses
                  </a>
                  <a href="" className="dropdown-item">
                    Women's Dresses
                  </a>
                  <a href="" className="dropdown-item">
                    Baby's Dresses
                  </a>
                </div>
              </div>
              <a href="" className="nav-item nav-link">
                Shirts
              </a>
              <a href="" className="nav-item nav-link">
                Jeans
              </a>
              <a href="" className="nav-item nav-link">
                Swimwear
              </a>
              <a href="" className="nav-item nav-link">
                Sleepwear
              </a>
              <a href="" className="nav-item nav-link">
                Sportswear
              </a>
              <a href="" className="nav-item nav-link">
                Jumpsuits
              </a>
              <a href="" className="nav-item nav-link">
                Blazers
              </a>
              <a href="" className="nav-item nav-link">
                Jackets
              </a>
              <a href="" className="nav-item nav-link">
                Shoes
              </a>
            </div>
          </nav>
        </div> */}
        <div className="col-lg-12">
          <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
            <a href="" className="text-decoration-none d-block d-lg-none">
              <h1 className="m-0 display-5 font-weight-semi-bold dancing-script-font">
                Mulia Smith
              </h1>
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav mr-auto py-0">
                <NavItem href={routes.home} title={"Home"}></NavItem>
                <NavItem href={routes.shop} title={"Shop"}></NavItem>
                <NavItem href={routes.contact} title={"Contact"}></NavItem>

                {/* <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu rounded-0 m-0">
                    <Link href="cart" className={`dropdown-item `}>
                      Shopping Cart
                    </Link>
                    <Link href="checkout" className="dropdown-item">
                      Checkout
                    </Link>
                  </div>
                </div> */}
              </div>

              {!AuthService.isLogin() && (
                <div className="navbar-nav ml-auto py-0">
                  <NavItem href={routes.login} title={"Login"}></NavItem>
                  {/* <NavItem href={routes.register} title={"Register"}></NavItem> */}
                </div>
              )}
            </div>
          </nav>
          {showCarousel && (
            <div
              id="header-carousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                {promotion.data?.map((item, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 && "active"}`}
                    style={{ height: "410px" }}
                  >
                    <Image
                      className="img-fluid"
                      src={item.full_image_path}
                      alt="Image"
                      width={300}
                      height={300}
                    />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                      <div className="p-3" style={{ maxWidth: "700px" }}>
                        <h4 className="text-light text-uppercase font-weight-medium mb-3">
                          {item.promotion_description}
                        </h4>
                        <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                          {item.promotion_title}
                        </h3>
                        <a
                          href={item.promotion_url}
                          className="btn btn-light py-2 px-3"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                ))}

                {/* <div className="carousel-item" style={{ height: "410px" }}>
                  <Image
                    className="img-fluid"
                    src="img/carousel-2.jpg"
                    alt="Image"
                    width={300}
                    height={300}
                  />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: "700px" }}>
                      <h4 className="text-light text-uppercase font-weight-medium mb-3">
                        10% Off Your First Order
                      </h4>
                      <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                        Reasonable Price
                      </h3>
                      <a href="" className="btn btn-light py-2 px-3">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>
              <a
                className="carousel-control-prev"
                href="#header-carousel"
                data-slide="prev"
              >
                <div
                  className="btn btn-dark"
                  style={{ width: "45px", height: "45px" }}
                >
                  <span className="carousel-control-prev-icon mb-n2"></span>
                </div>
              </a>
              <a
                className="carousel-control-next"
                href="#header-carousel"
                data-slide="next"
              >
                <div
                  className="btn btn-dark"
                  style={{ width: "45px", height: "45px" }}
                >
                  <span className="carousel-control-next-icon mb-n2"></span>
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
