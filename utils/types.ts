export interface Callback<T> {
  (param: T, ...args: any[]): void;
}
