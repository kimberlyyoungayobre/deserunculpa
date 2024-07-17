type RecursiveType<T> = {
  [P in keyof T]: T[P] extends object ? RecursiveType<T[P]> : T[P];
};

type RecursiveNestedObject = RecursiveType<NestedObject>;
