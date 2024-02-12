declare global {
  interface FormDataValue {
    uri: string;
    name: string;
    type: string;
  }

  interface FormData {
    append(name: string, value: FormDataValue, fileName?: string): void;
    set(name: string, value: FormDataValue, fileName?: string): void;
  }
}

// Null許可タイプを定義する
export type Nullable<T> = T | null;

export type ValueOf<T> = T[keyof T];

//  eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Unknown = any;

//  eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Any = any;

//  eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Obj<V = any> = { [attr: string]: V };

//  eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ObjsByKey<V = any> = { [key: string]: Obj<V> };

export type PartialValues<M> = Partial<M & Obj>;

export type SelectOption<D extends Obj = Obj> = {
  label: string | number;
  value: string | number;
  disabled?: boolean;
  tooltipTitle?: string; // For display tooltip
  data?: D;
};

export type ExportOption = {
  label: string;
  value: string | string[];
};

export type Option<D = Any> = { label: string; value: D };
