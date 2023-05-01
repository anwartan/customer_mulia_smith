import Link from "next/link";
import { useRouter } from "next/router";
import AuthService from "../../../services/auth.service";
import { useState } from "react";
import useForm from "../../../utils/UseForm";

const RegisterForm = () => {
  const router = useRouter();

  const { values, errors, handleChange, handleBlur, handleSubmit } = useForm(
    "register",
    {
      email: "",
      password: "",
      name: "",
      password_confirmation: "",
    },
    (values) => {
      router.push("/login");
    }
  );

  return (
    <form onSubmit={handleSubmit}>
      <div className="row px-xl-5  justify-content-center">
        <div className="col-lg-7 mb-5">
          <div className="control-group">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Your Username"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              data-validation-required-message="Please enter your Username"
            />
            <p className="help-block text-danger">{errors.name}</p>
          </div>
          <div className="control-group">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Your Email"
              required
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              data-validation-required-message="Please enter your email"
            />
            <p className="help-block text-danger">{errors.email}</p>
          </div>
          <div className="control-group">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Your Password"
              required
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              data-validation-required-message="Please enter your password"
            />
            <p className="help-block text-danger">{errors.password}</p>
          </div>
          <div className="control-group">
            <input
              type="password"
              className="form-control"
              name="password_confirmation"
              placeholder="Retype your password"
              value={values.password_confirmation}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              data-validation-required-message="Please enter your confirmation password"
            />
            <p className="help-block text-danger">
              {errors.password_confirmation}
            </p>
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
    </form>
  );
};

export default RegisterForm;
