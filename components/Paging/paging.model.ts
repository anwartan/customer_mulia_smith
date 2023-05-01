export interface Pagination {
  total: number;
  per_page: number;
  current_page: number;
}

export interface PagingPage<T> {
  data: Array<T> | null;
  pagination: Pagination;
}
