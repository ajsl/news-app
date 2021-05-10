import { observer } from "mobx-react-lite";
import React, { Fragment, useContext } from "react";
import ArticleStore from "../stores/articleStore";

const ArticlesList: React.FC = () => {
  const articleStore = useContext(ArticleStore);
  const { articles } = articleStore;

  console.log(articles);
  if (articles.length === 0) {
    return <h1>No articles</h1>;
  }

  return (
    <Fragment>
      <h1>art list</h1>
      {articles.map((articles) => (
        <Fragment key={articles.id}>
          <h1>{articles.webTitle}</h1>
          <p>
            <em>{articles.webPublicationDate}</em>
          </p>
          <a target="_blank" href={articles.webUrl}>
            Go
          </a>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default observer(ArticlesList);
