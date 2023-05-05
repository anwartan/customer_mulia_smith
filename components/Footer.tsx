import { GetServerSideProps } from "next";
import CompanyProfile from "../config/CompanyProfile";
import routes from "../config/Routes";
import Link from "next/link";
import useForm from "../utils/UseForm";
import apiUrls from "../config/ApiUrls";
const Footer = () => {
  const { values, errors, handleChange, handleBlur, handleSubmit } = useForm(
    apiUrls.newsSubscribe,
    {
      email: "",
      name: "",
    },
    (values) => {
    }
  );
  return (
    <div className="container-fluid bg-secondary text-dark mt-5 pt-5">
      <div className="row px-xl-5 pt-5">
        <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
          <a href="" className="text-decoration-none">
            <h1 className="mb-4 display-5 font-weight-semi-bold dancing-script-font">
              {CompanyProfile.storeName}
            </h1>
          </a>
          <p>{CompanyProfile.description}</p>
          <p className="mb-2">
            <i className="fa fa-map-marker-alt text-primary mr-3"></i>
            {CompanyProfile.storeLocation}
          </p>
          <p className="mb-2">
            <i className="fa fa-envelope text-primary mr-3"></i>
            {CompanyProfile.storeEmail}
          </p>
          <p className="mb-0">
            <i className="fa fa-phone-alt text-primary mr-3"></i>
            {CompanyProfile.storePhone}
          </p>
        </div>
        <div className="col-lg-8 col-md-12">
          <div className="row">
            <div className="col-md-8 mb-5">
              <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
              <div className="d-flex flex-column justify-content-start">
                <Link className="text-dark mb-2" href={routes.home}>
                  <i className="fa fa-angle-right mr-2"></i>Home
                </Link>
                <Link className="text-dark mb-2" href={routes.shop}>
                  <i className="fa fa-angle-right mr-2"></i>Our Shop
                </Link>
                <Link className="text-dark" href={routes.contact}>
                  <i className="fa fa-angle-right mr-2"></i>Contact Us
                </Link>
              </div>
            </div>

            <div className="col-md-4 mb-5">
              <h5 className="font-weight-bold text-dark mb-4">Newsletter</h5>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control border-0 py-4"
                    placeholder="Your Name"
                    name="name"
                    required
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="help-block text-danger">{errors.name}</p>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control border-0 py-4"
                    placeholder="Your Email"
                    name="email"
                    required
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="help-block text-danger">{errors.email}</p>
                </div>
                <div>
                  <button
                    className="btn btn-primary btn-block border-0 py-3"
                    type="submit"
                  >
                    Subscribe Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row border-top border-light mx-xl-5 py-4">
        <div className="col-md-6 px-xl-0">
          <p className="mb-md-0 text-center text-md-left text-dark">
            &copy;{" "}
            <a className="text-dark font-weight-semi-bold" href="#">
              MuliaSmith
            </a>
            . All Rights Reserved. Designed by
            <a
              className="text-dark font-weight-semi-bold"
              href="https://htmlcodex.com"
            >
              HTML Codex
            </a>
            <br></br>
            Distributed By{" "}
            <a href="https://themewagon.com" target="_blank">
              ThemeWagon
            </a>
          </p>
        </div>
        <div className="col-md-6 px-xl-0 text-center text-md-right">
          {/* <img className="img-fluid" src="/img/payments.png" alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default Footer;
