import Image from "next/image";

function Category() {
  return (
    <div className="container-fluid pt-5">
      <div className="row px-xl-5 pb-3">
        <div className="col-lg-4 col-md-6 pb-1">
          <div
            className="cat-item d-flex flex-column border mb-4"
            style={{ padding: "30px" }}
          >
            <p className="text-right">15 Products</p>
            <a
              href=""
              className="cat-img position-relative overflow-hidden mb-3"
            >
              <Image
                className="img-fluid"
                src="img/cat-1.jpg"
                alt=""
                width={300}
                height={300}
              />
            </a>
            <h5 className="font-weight-semi-bold m-0">Men`&apos;`s dresses</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
          <div
            className="cat-item d-flex flex-column border mb-4"
            style={{ padding: "30px" }}
          >
            <p className="text-right">15 Products</p>
            <a
              href=""
              className="cat-img position-relative overflow-hidden mb-3"
            >
              <Image
                className="img-fluid"
                src="img/cat-1.jpg"
                alt=""
                width={300}
                height={300}
              />
            </a>
            <h5 className="font-weight-semi-bold m-0">
              Women`&apos;`s dresses
            </h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
          <div
            className="cat-item d-flex flex-column border mb-4"
            style={{ padding: "30px" }}
          >
            <p className="text-right">15 Products</p>
            <a
              href=""
              className="cat-img position-relative overflow-hidden mb-3"
            >
              <Image
                className="img-fluid"
                src="img/cat-1.jpg"
                alt=""
                width={300}
                height={300}
              />
            </a>
            <h5 className="font-weight-semi-bold m-0">Baby`&apos;`s dresses</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
          <div
            className="cat-item d-flex flex-column border mb-4"
            style={{ padding: "30px" }}
          >
            <p className="text-right">15 Products</p>
            <a
              href=""
              className="cat-img position-relative overflow-hidden mb-3"
            >
              <Image
                className="img-fluid"
                src="img/cat-1.jpg"
                alt=""
                width={300}
                height={300}
              />
            </a>
            <h5 className="font-weight-semi-bold m-0">Accerssories</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
          <div
            className="cat-item d-flex flex-column border mb-4"
            style={{ padding: "30px" }}
          >
            <p className="text-right">15 Products</p>
            <a
              href=""
              className="cat-img position-relative overflow-hidden mb-3"
            >
              <Image
                className="img-fluid"
                src="img/cat-1.jpg"
                alt=""
                width={300}
                height={300}
              />
            </a>
            <h5 className="font-weight-semi-bold m-0">Bags</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
          <div
            className="cat-item d-flex flex-column border mb-4"
            style={{ padding: "30px" }}
          >
            <p className="text-right">15 Products</p>
            <a
              href=""
              className="cat-img position-relative overflow-hidden mb-3"
            >
              <Image
                className="img-fluid"
                src="img/cat-1.jpg"
                alt=""
                width={300}
                height={300}
              />
            </a>
            <h5 className="font-weight-semi-bold m-0">Shoes</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
