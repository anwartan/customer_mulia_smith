import apiUrls from "../config/ApiUrls";
import useForm from "../utils/UseForm";

function Subscribe() {
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
    <div className="container-fluid bg-secondary my-5">
      <div className="row justify-content-md-center py-5 px-xl-5">
        <div className="col-md-6 col-12 py-5">
          <div className="text-center mb-2 pb-2">
            <h2 className="section-title px-5 mb-3">
              <span className="bg-secondary px-2">Stay Updated</span>
            </h2>
            <p>
              Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet diam
              labore at justo ipsum eirmod duo labore labore.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                className="form-control border-white p-4"
                placeholder="Email Goes Here"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <div className="input-group-append">
                <button className="btn btn-primary px-4">Subscribe</button>
              </div>
            </div>
            <p className="help-block text-danger">{errors.email}</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
