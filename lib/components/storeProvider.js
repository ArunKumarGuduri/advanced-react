import React from 'react';
import PropTypes from 'prop-types';

// creting container component, hihger order
const storeProvider = (extraProps) => (Component) => {
    return class extends React.PureComponent {
        static displayName = `${Component.name}Container`;
        static contextTypes = {
            store: PropTypes.object
        };
        onStoreChange = () => {
            this.forceUpdate();
        }
        componentDidMount() {
            this.subscriptionId = this.context.store.subscribe(this.onStoreChange);
        }
        componentWillUnmount() {
            this.context.store.unsubscribe(this.subscriptionId)
        }
        render() {
            return <Component {...this.props} {...extraProps(this.context.store, this.props)} store={this.context.store} />;
        }
    }
}

export default storeProvider;