export function tryCatch(
  f: () => void,
  errorHandler: (error: unknown) => void
) {
  try {
    f();
  } catch (error) {
    errorHandler(error);
  }
}

export function wrapIgnoreErrors<T>(f: (arg: T) => void) {
  return (arg: T) => {
    try {
      f(arg);
    } catch (error) {}
  };
}
