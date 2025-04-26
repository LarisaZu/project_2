import { IUser } from "5.entities/User";

export interface IArticle {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: EArticleType[];
  user: IUser;
  blocks: TArticleBlock[];
}

interface IArticleBaseBlock {
  id: string;
  type: EArticleBlockType;
}

export interface IArticleCodeBlock extends IArticleBaseBlock {
  type: EArticleBlockType.CODE;
  code: string;
}

export interface IArticleTextBlock extends IArticleBaseBlock {
  type: EArticleBlockType.TEXT;
  title?: string;
  paragraphs: string[];
}

export interface IArticleImageBlock extends IArticleBaseBlock {
  type: EArticleBlockType.IMAGE;
  src: string;
  title: string;
}

export type TArticleBlock =
  | IArticleCodeBlock
  | IArticleTextBlock
  | IArticleImageBlock;

export enum EArticleType {
  ALL = "ALL",
  IT = "IT",
  ECONOMICS = "ECONOMICS",
  SCIENCE = "SCIENCE",
}

export enum EArticleBlockType {
  TEXT = "TEXT",
  IMAGE = "IMAGE",
  CODE = "CODE",
}

export enum EArticleView {
  BIG = "BIG",
  SMALL = "SMALL",
}

export enum EArticleSortField {
  VIEWS = "views",
  TITLE = "title",
  CREATED = "createdAt",
}
