export type UniqId = string;

export type WithUid<T> = T & { uid: UniqId };
export type WithErrors<T> = T & { errors?: string[] };

export type DateTimeString = string | Date;

export type Maybe<T> = T | null | undefined;

export type MaybeAll<T> = {
  [A in keyof T]: T[A] extends Array<any>
    ? Maybe<T[A]>
    : T[A] extends Record<any, any>
    ? MaybeAll<T[A]>
    : Maybe<T[A]>;
};

export type RecursivePartial<T> = T extends object
  ? {
      [P in keyof T]?: T[P] extends (infer U)[]
        ? RecursivePartial<U>[]
        : T[P] extends object
        ? RecursivePartial<T[P]>
        : T[P];
    }
  : any;

export type Flatten<T> = T extends ReadonlyArray<any>
  ? T[number]
  : T extends any[]
  ? T[number]
  : T;

export type Nullable<T> = T | null;

export enum ChartType {
  Bar = "bar",
  Line = "line",
}

export type ChartData<T = number> = {
  name: string;
  type: ChartType;
  data: T[];
  color: string;
};

export type ValueOf<T> = T[keyof T];

export type ParamsWithoutFirst<F> = F extends (
  firstP: any,
  ...restP: infer R
) => any
  ? R
  : never;

export type TranslateFn = (s: string) => string;
