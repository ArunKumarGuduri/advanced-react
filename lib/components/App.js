import React from "react";
import axios from "axios";

import DataApi from "state-api";
import { data } from "../testData.json";
import ArticleList from "./ArticleList";
class App extends React.Component {
    state = {
        articles: this.props.initialData.articles,
        authors: this.props.initialData.authors
    }
    articleActions = {
        lookupAuthor: authorId => this.state.authors[authorId]
    }
    render() {
        return (
            <ArticleList
                articles={this.state.articles}
                articleActions={this.articleActions}
            />
        );
    }
}

export default App;