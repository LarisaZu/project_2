import React, { memo } from "react";

import { Text } from "6.shared/ui-kit/Text/Text";
import { classNames } from "6.shared/lib";
import { IArticleImageBlock } from "../../model/types/article";

import cls from "./ArticleImageBlock.module.scss";

interface IArticleImageBlockProps {
  className?: string;
  block: IArticleImageBlock;
}

export const ArticleImageBlock = memo(function ArticleImageBlock(
  props: IArticleImageBlockProps
) {
  const { className, block } = props;

  return (
    <div className={classNames(cls.articleImageBlock, [className])}>
      <img src={block.src} alt={block.title} className={cls.image} />
      <Text text={block.title} align="center" />
    </div>
  );
});
