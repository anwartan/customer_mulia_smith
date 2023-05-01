import Link from "next/link";
import LoginForm from "../components/Forms/LoginForm";

function login() {
  return (
    <div className="container-fluid pt-5">
      <div className="text-center mb-4">
        <h2 className="section-title px-5">
          <span className="px-2">Login Account</span>
        </h2>
      </div>
      <LoginForm></LoginForm>
    </div>
  );
}

export default login;
