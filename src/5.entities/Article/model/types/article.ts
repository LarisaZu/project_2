export interface IArticle {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: EArticleType[];
  blocks: TArticleBlock[];
}

interface IArticleBaseBlock {
  id: string;
  type: EArticleBlockType;
}

interface IArticleCodeBlock extends IArticleBaseBlock {
  type: EArticleBlockType.CODE;
  code: string;
}

interface IArticleTextBlock extends IArticleBaseBlock {
  type: EArticleBlockType.TEXT;
  title?: string;
  paragraphs: string[];
}

interface IArticleImageBlock extends IArticleBaseBlock {
  type: EArticleBlockType.IMAGE;
  src: string;
  title: string;
}

type TArticleBlock = IArticleCodeBlock | IArticleTextBlock | IArticleImageBlock;

export enum EArticleType {
  IT = "IT",
  ECONOMICS = "ECONOMICS",
  SCIENCE = "SCIENCE",
}

export enum EArticleBlockType {
  TEXT = "TEXT",
  IMAGE = "IMAGE",
  CODE = "CODE",
}
