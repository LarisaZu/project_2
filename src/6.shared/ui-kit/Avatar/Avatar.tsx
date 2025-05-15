import React, { CSSProperties, useMemo } from "react";
import { classNames } from "6.shared/lib";
import defaultAvatar from "6.shared/lib/assets/default_avatar.png";

import cls from "./Avatar.module.scss";

interface IAvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number;
}

export const Avatar = (props: IAvatarProps) => {
  const { className, alt, src, size = 100 } = props;

  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size]
  );

  return (
    <img
      src={src || defaultAvatar}
      alt={alt}
      style={styles}
      className={classNames(cls.avatar, [className])}
    />
  );
};
