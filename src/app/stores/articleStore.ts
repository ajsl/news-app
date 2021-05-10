import { action, computed, configure, observable, runInAction } from "mobx";
import { createContext } from "react";
import agent from "../api/agent";
import { IArticle } from "../models/article";

configure({ enforceActions: "always"});

class ArticleStore {
    @observable articleRegistry = new Map();
    @observable article: IArticle | null = null;

    @computed get articles(): IArticle[] {
        return Array.from(this.articleRegistry.values());
    }

    @action loadArticles = async () => {
        try {

            const articles = await agent.Articles.guardian();
            
            runInAction(() => {
                articles.response.results.forEach((article) => {
                    this.articleRegistry.set(article.id, article); 
                });
            })

        } catch (error) {
            console.log(error);
        }
    }

    @action loadArticle = async (url: string) => {
        try {
            
            const article = agent.Article.guardian(url);
            return article;
            
        } catch (error) {
            console.log(error);
        }
    }

}

export default createContext(new ArticleStore());