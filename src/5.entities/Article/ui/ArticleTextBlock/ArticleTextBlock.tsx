import React, { memo } from "react";

import { classNames } from "6.shared/lib";
import { Text } from "6.shared/ui-kit/Text/Text";

import { IArticleTextBlock } from "../../model/types/article";
import cls from "./ArticleTextBlock.module.scss";

interface IArticleTextBlockProps {
  className?: string;
  block: IArticleTextBlock;
}

export const ArticleTextBlock = memo(function ArticleTextBlock(
  props: IArticleTextBlockProps
) {
  const { className, block } = props;

  return (
    <div className={classNames(cls.articleTextBlock, [className])}>
      {block?.title && <Text title={block.title} />}
      {block.paragraphs.map((elem, idx) => (
        <Text key={idx} text={elem} />
      ))}
    </div>
  );
});
