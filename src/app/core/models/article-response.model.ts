import { ArticleModel } from "./article.model";

export interface ArticleResponseModel {
    status: string;
    totalResults: number;
    articles: ArticleModel[];
}