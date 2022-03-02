

export const map = <A, B>(array: Array<A>, f: (a: A) => B): Array<B> => {
  const result: Array<B> = []
  for (const value of array) {
    result.push(f(value));
  }
  return result;
}

export type MapType<A, B> = (xs: Array<A>, f: (x: A) => B) => Array<B>
// (Array < A >, A => B) => Array<B>

export type MapType1 = MapType<number, string>
// (number[], number => string) => string[]

export type Compose<A, B, C> = (g: (y: B) => C, f: (x: A) => B) => (a: A) => C;
// (B => C, A => B) => A => C

export type Compose1 = Compose<string, number, boolean>;
// (number => boolean,  string => number) => string => boolean