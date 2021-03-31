import React, { Fragment, useContext, useEffect } from "react";
import ArticlesList from "./ArticlesList";
import ArticleStore from "../stores/articleStore";
import { observer } from "mobx-react-lite";


const ArticlesDashboard: React.FC = () => {
    const articleStore = useContext(ArticleStore);
    useEffect(() => {
        articleStore.loadArticles();
      }, [articleStore]); 

  return (
    <Fragment>
      <h1>articles</h1>
      <ArticlesList />
    </Fragment>
  );
};

export default observer(ArticlesDashboard);