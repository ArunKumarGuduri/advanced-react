import React from "react";
import Article from "./Article";
function ArticleList(props) {
    return (
        <div>
            {Object.values(props.articles).map(article =>
                <Article
                    key={article.id}
                    article={article}
                    store={props.store}
                />
            )}
        </div>
    );
}

export default ArticleList;