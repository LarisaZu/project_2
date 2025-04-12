import React, { memo, MutableRefObject, ReactNode, useRef } from "react";
import { useLocation } from "react-router-dom";

import { useInfiniteScroll } from "6.shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { classNames } from "6.shared/lib";

import cls from "./Page.module.scss";
import {
  useAppDispatch,
  useInitialEffect,
  useThrottle,
} from "6.shared/lib/hooks";
import { getScrollByPath, scrollSaveActions } from "4.features/scrollSave";
import { IStateSchema } from "1.app/providers/StoreProvider";
import { useSelector } from "react-redux";

interface IPageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo(function Page(props: IPageProps) {
  const { className, children, onScrollEnd } = props;

  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: IStateSchema) =>
    getScrollByPath(state, pathname)
  );

  const wrapperRef =
    useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  const targetRef =
    useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  useInfiniteScroll({
    wrapperRef,
    targetRef,
    callback: onScrollEnd,
  });

  const handleScroll = useThrottle((evt: React.UIEvent<HTMLDivElement>) => {
    dispatch(
      scrollSaveActions.setScroll({
        path: pathname,
        position: evt.currentTarget.scrollTop,
      })
    );
  }, 700);

  return (
    <section
      ref={wrapperRef}
      className={classNames(cls.page, [className])}
      onScroll={handleScroll}
    >
      {children}
      <div ref={targetRef} />
    </section>
  );
});
