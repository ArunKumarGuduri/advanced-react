import React from "react";
import axios from "axios";

import DataApi from "state-api";
import { data } from "../testData.json";
import ArticleList from "./ArticleList";
class App extends React.Component {
    state = this.props.store.getState()
    // articleActions = {
    //     lookupAuthor: authorId => this.state.authors[authorId]
    // }
    render() {
        return (
            <ArticleList
                articles={this.state.articles}
                store={this.props.store}
            />
        );
    }
}

export default App;