import { Callback } from "../../utils/types";

export interface props {
  currentPage: number;
  totalPages: number;
  onPageChange: Callback<number>;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: props) => {
  const pages: number[] = [];

  // Add previous page link
  if (currentPage > 1) {
    pages.push(currentPage - 1);
  }

  // Add current page
  pages.push(currentPage);

  // Add next page link
  if (currentPage < totalPages) {
    pages.push(currentPage + 1);
  }

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center mb-3">
        {pages.map((item, index) => (
          <li
            onClick={() => {
              onPageChange(item);
            }}
            key={index}
            className={`page-item ${item === currentPage ? "active" : ""}`}
          >
            <button className="page-link">
              <>{item}</>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
