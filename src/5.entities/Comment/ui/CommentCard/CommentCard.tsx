import React, { memo } from "react";
import { classNames } from "6.shared/lib";
import { Avatar } from "6.shared/ui-kit/Avatar/Avatar";
import { Text } from "6.shared/ui-kit/Text/Text";
import avatar from "6.shared/lib/assets/default_avatar.png";

import { IComment } from "../../model/types/comment";
import cls from "./CommentCard.module.scss";
import { Skeleton } from "6.shared/ui-kit/Skeleton/Skeleton";
import { AppLink } from "6.shared/ui-kit/AppLink/AppLink";
import { AppRoute, routePath } from "6.shared/config/routeConfig/routeConfig";

interface ICommentCardProps {
  className?: string;
  data?: IComment;
  isLoading?: boolean;
}

export const CommentCard = memo(function CommentCard(props: ICommentCardProps) {
  const { className, data, isLoading } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.commentCard, [className])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} radius="50%" />
          <Skeleton height={20} width={70} />
        </div>
        <Skeleton height={50} />
      </div>
    );
  }

  if (data) {
    return (
      <div className={classNames(cls.commentCard, [className])}>
        <AppLink
          className={cls.header}
          to={routePath[AppRoute.PROFILE] + data.user.id}
        >
          <Avatar src={data.user.avatar || avatar} size={30} />
          <Text title={data.user.username} />
        </AppLink>
        <Text text={data.text} />
      </div>
    );
  }

  return null;
});
