import { ReactNode } from "react";
import { FetchValue } from "../../utils/UseFetch";

interface props<T> {
  data: FetchValue<T>;
  children: ReactNode;
  emptyState?: ReactNode;
  placeholder?: ReactNode;
}
function Box<T>({
  data,
  children,
  emptyState = <></>,
  placeholder = <></>,
}: props<T>) {
  if (data.isLoading) {
    return <>{placeholder}</>;
  }
  if (!data.isLoading && data.data == null) {
    return <>{emptyState}</>;
  }
  return <>{children}</>;
}

export default Box;
