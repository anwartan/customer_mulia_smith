import { ProductAdditionalInfo } from "../../model/shop.model";

interface Props {
  data?: Array<ProductAdditionalInfo>;
}
const AdditionalInfo = ({ data = [] }: Props) => {
  const count = Math.floor(data.length / 2);
  const mod = data.length % 2;
  const left = data.length > 4 ? data.slice(0, count + mod) : data;
  const right = data.length > 4 ? data.slice(count + mod, data.length) : [];

  return (
    <div>
      <h4 className="mb-3">Additional Information</h4>

      <div className="row">
        <div className="col-md-6">
          <ul className="list-group list-group-flush">
            {left.map((item, index) => (
              <li
                key={index}
                className="list-group-item px-0 d-flex justify-content-between"
              >
                <p>{item.label}</p>
                <p className="text-dark font-weight-medium">{item.value}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6">
          <ul className="list-group list-group-flush">
            {right.map((item, index) => (
              <li
                key={index}
                className="list-group-item px-0 d-flex justify-content-between"
              >
                <p>{item.label}</p>
                <p className="text-dark font-weight-medium">{item.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
