import React, { memo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "6.shared/lib";
import { Text } from "6.shared/ui-kit/Text/Text";

import { IComment } from "../../model/types/comment";
import { CommentCard } from "../CommentCard/CommentCard";

import cls from "./CommentsList.module.scss";

interface ICommentListProps {
  className?: string;
  data?: IComment[];
  isLoading?: boolean;
}

export const CommentsList = memo(function CommentList(
  props: ICommentListProps
) {
  const { className, data, isLoading } = props;

  const { t } = useTranslation("comments");

  let content = null;

  if (isLoading) {
    content = <CommentCard isLoading />;
  } else if (data?.length) {
    content = data.map((comment) => (
      <CommentCard key={comment.id} data={comment} />
    ));
  } else {
    content = <Text text={t("Комментариев нет")} />;
  }

  return (
    <div className={classNames(cls.commentList, [className])}>{content}</div>
  );
});
