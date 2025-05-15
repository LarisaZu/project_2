import React, { memo } from "react";

import { classNames } from "6.shared/lib";
import { IArticleCodeBlock } from "../../model/types/article";
import { Code } from "6.shared/ui-kit/Code/Code";

import cls from "./ArticleCodeBlock.module.scss";

interface IArticleCodeBlockProps {
  className?: string;
  block: IArticleCodeBlock;
}

export const ArticleCodeBlock = memo(function ArticleCodeBlock(
  props: IArticleCodeBlockProps
) {
  const { className, block } = props;

  return (
    <div className={classNames(cls.articleCodeBlock, [className])}>
      <Code text={block.code} />
    </div>
  );
});
