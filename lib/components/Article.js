import React from 'react';
import PropTypes from 'prop-types';

import storeProvider from './storeProvider';

// presentational component
function Article(props) {
    // store is being destructured from context which is a second argument like (props, context)
    const { article, store } = props;
    const author = store.lookupAuthor(article.authorId);
    return (
        <div>
            <div>{article.title}</div>
            <div>{article.date}</div>
            <div>
                <a href={author.website}> {author.firstName} {author.lastName}</a>
            </div>
            <div>{article.body}</div>
        </div>
    );
}

Article.propTypes = {
    article: PropTypes.shape({
        date: PropTypes.string.isRequired
    })
}

export default storeProvider(Article);