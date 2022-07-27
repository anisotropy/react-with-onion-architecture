import { useCallback, useState } from "react";

export function useAsync<T>(fetcher: () => Promise<T>, onSuccess?: () => void) {
  const [isCalled, setIsCalled] = useState(false);
  const [done, setDone] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<unknown | null>(null);

  const callback = useCallback(async () => {
    setIsCalled(true);
    try {
      const data = await fetcher();
      setDone(true);
      setData(data);
      if (onSuccess) onSuccess();
    } catch (error) {
      setError(error);
    }
    setIsCalled(false);
  }, [fetcher, onSuccess]);

  const reset = useCallback(() => {
    setIsCalled(false);
    setDone(false);
    setData(null);
    setError(null);
  }, []);

  return { isCalled, done, data, error, callback, reset };
}
