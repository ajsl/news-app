import { Fragment } from "react";
import { IArticle } from "../models/article";

const Article: React.FC<{ article: IArticle}> = ({article}) => {
    return(
        <Fragment>
            <h1>{article.webTitle}</h1>
            <p><em>{article.webPublicationDate}</em></p>
            <p>{article.sectionName}</p>
            <a href={article.webUrl}>Go to the Guardian</a>
        </Fragment>
    )
}