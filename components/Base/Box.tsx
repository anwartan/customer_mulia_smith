import { ReactNode } from "react";
import { FetchValue } from "../../utils/UseFetch";
import { PagingPage } from "../Paging/paging.model";

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
  function isPagingData<T>(obj: unknown): obj is PagingPage<T> {
    return (
      (obj as PagingPage<T>).data !== undefined &&
      (obj as PagingPage<T>).pagination !== undefined
    );
  }

  const isEmptyArray = () => {
    console.log("array", data.data);

    if (Array.isArray(data.data)) {
      return data.data.length === 0;
    } else if (isPagingData(data.data)) {
      return data.data.data?.length === 0;
    }
    return false;
  };

  if (data.isLoading) {
    console.log("children");
    return <>{placeholder}</>;
  }
  if (!data.isLoading && (data.data == null || isEmptyArray())) {
    console.log("empty state");
    return <>{emptyState}</>;
  }
  console.log("children");
  return <>{children}</>;
}

export default Box;
