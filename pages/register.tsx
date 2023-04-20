import Link from "next/link";

function Register() {
  return (
    <div className="container-fluid pt-5">
      <div className="text-center mb-4">
        <h2 className="section-title px-5">
          <span className="px-2">Register Account</span>
        </h2>
      </div>
      <div className="row px-xl-5  justify-content-center">
        <div className="col-lg-7 mb-5">
          <div className="control-group">
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Your Username"
              required
              data-validation-required-message="Please enter your Username"
            />
            <p className="help-block text-danger"></p>
          </div>
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
          <div className="control-group">
            <input
              type="password"
              className="form-control"
              id="c_password"
              placeholder="Retype your password"
              required
              data-validation-required-message="Please enter your confirmation password"
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
              Register
            </button>
            <span>
              I have an account. <Link href="/login">Log In</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
