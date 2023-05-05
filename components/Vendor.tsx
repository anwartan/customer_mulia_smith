import Image from "next/image";

function Vendor() {
  return (
    <div className="container-fluid py-5">
      <div className="row px-xl-5">
        <div className="col">
          <div className="owl-carousel">
            <div className="vendor-item border p-4">
              <Image src="img/vendor-1.jpg" alt="" width={300} height={300} />
            </div>
            <div className="vendor-item border p-4">
              <Image src="img/vendor-1.jpg" alt="" width={300} height={300} />
            </div>
            <div className="vendor-item border p-4">
              <Image src="img/vendor-1.jpg" alt="" width={300} height={300} />
            </div>
            <div className="vendor-item border p-4">
              <Image src="img/vendor-1.jpg" alt="" width={300} height={300} />
            </div>
            <div className="vendor-item border p-4">
              <Image src="img/vendor-1.jpg" alt="" width={300} height={300} />
            </div>
            <div className="vendor-item border p-4">
              <Image src="img/vendor-1.jpg" alt="" width={300} height={300} />
            </div>
            <div className="vendor-item border p-4">
              <Image src="img/vendor-1.jpg" alt="" width={300} height={300} />
            </div>
            <div className="vendor-item border p-4">
              <Image src="img/vendor-1.jpg" alt="" width={300} height={300} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vendor;
