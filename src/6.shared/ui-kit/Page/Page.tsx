import React, { memo, MutableRefObject, ReactNode, useRef } from "react";

import { useInfiniteScroll } from "6.shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { classNames } from "6.shared/lib";

import cls from "./Page.module.scss";

interface IPageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo(function Page(props: IPageProps) {
  const { className, children, onScrollEnd } = props;

  const wrapperRef =
    useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  const targetRef =
    useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    wrapperRef,
    targetRef,
    callback: onScrollEnd,
  });

  return (
    <section ref={wrapperRef} className={classNames(cls.page, [className])}>
      {children}
      <div ref={targetRef} />
    </section>
  );
});
