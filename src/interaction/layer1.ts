import { logToSnapErrors } from "./layer2";
import { tryCatch } from "./layer3";

export function withLogging(
  f: () => void,
  errorHandler: (error: unknown) => void
) {
  // 액션
  tryCatch(f, (error) => {
    errorHandler(error);
    logToSnapErrors(error);
  });
}

export function wrapLogging<T>(f: (arg: T) => void) {
  return function (arg: T) {
    try {
      f(arg);
    } catch (error) {
      logToSnapErrors(error);
    }
  };
}
