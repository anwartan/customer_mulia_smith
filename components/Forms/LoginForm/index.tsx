import Link from "next/link";
import { useRouter } from "next/router";
import AuthService from "../../../services/auth.service";
import useForm from "../../../utils/UseForm";

const LoginForm = () => {
  const router = useRouter();

  const { values, errors, handleChange, handleBlur, handleSubmit } = useForm(
    "login",
    {
      email: "",
      password: "",
    },
    (values) => {
      AuthService.saveAuthToken(values.data.access_token);
      router.push("/");
    }
  );
  return (
    <form onSubmit={handleSubmit}>
      <div className="row px-xl-5  justify-content-center">
        <div className="col-lg-7 mb-5">
          <div className="control-group">
            <input
              type="email"
              className="form-control"
              name="email"
              autoComplete="username"
              placeholder="Your Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              data-validation-required-message="Please enter your email"
            />
            <p className="help-block text-danger">{errors.email}</p>
          </div>
          <div className="control-group">
            <input
              type="password"
              className="form-control"
              autoComplete="current-password"
              name="password"
              placeholder="Your Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              data-validation-required-message="Please enter your password"
            />
            <p className="help-block text-danger">{errors.password}</p>
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
    </form>
  );
};

export default LoginForm;
