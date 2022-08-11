import { useState } from "react";

export function useAsync<T, R>(
  asyncFunc: (arg?: T) => Promise<R>,
  onSuccess?: (res: R) => void | Promise<void>,
  onError?: (error: unknown) => void | Promise<void>
) {
  const [response, setResponse] = useState<R>();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<unknown>();

  const callback = async (arg?: T) => {
    setIsProcessing(true);
    try {
      const res = await asyncFunc(arg);
      if (onSuccess) {
        onSuccess(res);
      } else {
        setResponse(res);
      }
    } catch (error) {
      if (onError) {
        onError(error);
      } else {
        setError(error);
      }
    }
    setIsProcessing(false);
  };

  return {
    callback,
    response,
    isProcessing,
    error,
  };
}
