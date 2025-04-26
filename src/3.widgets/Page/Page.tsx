import React, { memo, MutableRefObject, ReactNode, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { IStateSchema } from "1.app/providers/StoreProvider";
import { getScrollByPath, scrollSaveActions } from "4.features/scrollSave";
import { useInfiniteScroll } from "6.shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { classNames } from "6.shared/lib";

import {
  useAppDispatch,
  useInitialEffect,
  useThrottle,
} from "6.shared/lib/hooks";
import cls from "./Page.module.scss";

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
      {onScrollEnd && <div className={cls.trigger} ref={targetRef} />}
    </section>
  );
});
