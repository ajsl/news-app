import { action, computed, observable, runInAction } from "mobx";
import { createContext } from "react";
import agent from "../api/agent";
import { IArticle } from "../models/article";

class ArticleStore {
    @observable articleRegistry = new Map();
    @observable article: IArticle | null = null;

    @computed get articles(): IArticle[] {
        console.log(this.articleRegistry.values())
        return Array.from(this.articleRegistry.values());
    }

    @action loadArticles = async () => {
        try {

            const articles = await agent.Articles.guardian();
            console.log(articles.response.results);
            
            runInAction(() => {
                articles.response.results.forEach((article) => {
                    this.articleRegistry.set(article.id, article); 
                });
            })

        } catch (error) {
            console.log(error);
        }
    }

}

export default createContext(new ArticleStore());