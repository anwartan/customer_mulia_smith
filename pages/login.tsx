import Link from "next/link";

function login() {
  return (
    <div className="container-fluid pt-5">
      <div className="text-center mb-4">
        <h2 className="section-title px-5">
          <span className="px-2">Login Account</span>
        </h2>
      </div>
      <div className="row px-xl-5  justify-content-center">
        <div className="col-lg-7 mb-5">
          <div className="control-group">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Your Email"
              required
              data-validation-required-message="Please enter your email"
            />
            <p className="help-block text-danger"></p>
          </div>
          <div className="control-group">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Your Password"
              required
              data-validation-required-message="Please enter your password"
            />
            <p className="help-block text-danger"></p>
          </div>
          <div
            className="d-flex"
            style={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <button
              className="btn btn-primary py-2 px-4"
              type="submit"
              id="loginButton"
            >
              Login
            </button>
            <span>
              Do you have an account? <Link href="/register">Register</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
