import { MutableRefObject, useEffect } from "react";

export interface InfiniteScrollProps {
  callback?: () => void;
  wrapperRef: MutableRefObject<HTMLElement>;
  targetRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({
  callback,
  wrapperRef,
  targetRef,
}: InfiniteScrollProps) {
  useEffect(() => {
    if (!callback) {
      return;
    }

    const wrapper = wrapperRef.current;
    const target = targetRef.current;

    const options = {
      root: wrapper,
      rootMargin: "1px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    observer.observe(target);

    return () => {
      if (observer) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(target);
      }
    };
  }, [callback, targetRef, wrapperRef]);
}
