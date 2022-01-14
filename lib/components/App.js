import React from "react";
import PropTypes from 'prop-types';
import pickBy from "lodash.pickby";
import ArticleList from "./ArticleList";
import SearchBar from "./SearchBar";
import Timestamp from "./Timestamp"
class App extends React.Component {
    state = this.props.store.getState();
    static childContextTypes = {
        store: PropTypes.object
    }
    getChildContext() {
        return {
            store: this.props.store
        }
    }
    onStoreChange = () => {
        this.setState(this.props.store.getState())
    }
    componentDidMount() {
        this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
        this.props.store.startClock();
    }
    componentWillUnmount() {
        this.props.store.unsubscribe(this.subscriptionId)
    }
    render() {
        let { articles, searchTerm } = this.state;
        if (searchTerm) {
            articles = pickBy(articles, (value) => {
                return value.title.match(searchTerm) || value.body.match(searchTerm)
            })
        }
        return (
            <div>
                <Timestamp timestamp={this.state.timestamp} />
                <SearchBar doSearch={this.props.store.setSearchTerm} />
                <ArticleList
                    articles={articles}
                    store={this.props.store}
                />
            </div>
        );
    }
}

export default App;