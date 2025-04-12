import { useCallback, useEffect, useRef } from "react";

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const isThrottledRef = useRef(false);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return useCallback(
    (...args: any[]) => {
      if (!isThrottledRef.current) {
        callback(...args);
        isThrottledRef.current = true;

        timeoutRef.current = setTimeout(() => {
          isThrottledRef.current = false;
        }, delay);
      }
    },
    [callback, delay]
  );
}
