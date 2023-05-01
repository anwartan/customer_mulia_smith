import Link from "next/link";
import RegisterForm from "../components/Forms/RegisterForm";

function Register() {
  return (
    <div className="container-fluid pt-5">
      <div className="text-center mb-4">
        <h2 className="section-title px-5">
          <span className="px-2">Register Account</span>
        </h2>
      </div>
      <RegisterForm></RegisterForm>
    </div>
  );
}

export default Register;
