import React from 'react';
import PropTypes from 'prop-types';

function Article(props, { store }) {
    // store is being destructured from context which is a second argument like (props, context)
    const { article } = props;
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
Article.contextTypes = {
    store: PropTypes.object
}

export default Article;