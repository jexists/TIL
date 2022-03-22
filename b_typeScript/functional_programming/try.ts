// 실패하거나 성공했을때 각각 다른 값을 가지는 자료 구조

type Success<R> = {
  readonly _tag: "success",
  readonly result: R,
};

type Failed<E> = {
  readonly _tag: "failed",
  readonly error: E,
}

export type Try<E, R> = Failed<E> | Success<R>;

export const success = <R>(result: R): Try<never, R> => ({
  _tag: "success",
  result,
})

export const failed = <E>(error: E): Try<E, never> => ({
  _tag: "failed",
  error,
})

export const isSuccess = <R>(ta: Try<unknown, R>): ta is Success<R> => ta._tag === "success"

export const isFailed = <E>(ta: Try<E, unknown>): ta is Failed<E> => ta._tag === "failed"

// export const getOrElse = <R>(ta: Try<unknown, R>, defaultValue: R): R => {
//   //에러가 있을 경우 기본값 사용
//   if (isFailed(ta)) return defaultValue;
//   // 결과가 성공하면 해당 값 사용
//   return ta.result;
// }
export const getOrElse = <E, R>(ta: Try<E, R>, defaultValue: (e: E) => R): R => {
  //에러가 있을 경우 에러에 기반하여 기본 값 결정
  if (isFailed(ta)) return defaultValue(ta.error);
  // 결과가 성공하면 해당 값 사용
  return ta.result;
}