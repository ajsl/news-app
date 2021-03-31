import { observer } from "mobx-react-lite";
import React, { Fragment, useContext } from "react";
import ArticleStore from "../stores/articleStore";

const ArticlesList: React.FC = () => {
  const articleStore = useContext(ArticleStore);
  const { articles } = articleStore;
  // console.log(listOfArticles);
  
  return (
    <Fragment>
      {articles.map((articles) => (
        <Fragment key={articles.id}>
          <h1>{articles.webTitle}</h1>

          <p><em>{articles.webPublicationDate}</em></p>
          <a>{articles.webUrl}</a>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default observer(ArticlesList);
