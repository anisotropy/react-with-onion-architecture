import { useCallback, useState } from "react";

export function useAsync<T>(asyncCallback: () => Promise<T>) {
  const [isCalled, setIsCalled] = useState(false);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<unknown | null>(null);

  const callback = useCallback(async () => {
    setIsCalled(true);
    try {
      const data = await asyncCallback();
      setSuccess(true);
      setData(data);
    } catch (error) {
      setError(error);
    }
    setIsCalled(false);
  }, [asyncCallback]);

  const reset = useCallback(() => {
    setIsCalled(false);
    setSuccess(false);
    setData(null);
    setError(null);
  }, []);

  return { isCalled, success, data, error, callback, reset };
}

export function tryCatch(
  asyncCallback: () => Promise<void>,
  success?: () => void,
  failure?: () => void
) {
  asyncCallback()
    .then(() => {
      if (success) success();
    })
    .catch(() => {
      if (failure) failure;
    });
}
