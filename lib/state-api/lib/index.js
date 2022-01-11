class DataApi {
    constructor(rawData) {
        this.data = {
            articles: this.mapIntoObject(rawData.articles),
            authors: this.mapIntoObject(rawData.authors),
            searchTerm: ""
        };
        this.subscriptions = {};
        this.subscriptionId = 0;
    }
    mapIntoObject(arr) {
        return arr.reduce((acc, curr) => {
            acc[curr.id] = curr;
            return acc;
        }, {})
    }
    lookupAuthor = (authorId) => {
        return this.data.authors[authorId]
    }
    getState = () => {
        return this.data
    }
    subscribe = (cb) => {
        this.subscriptions[this.subscriptionId] = cb;
        this.subscriptionId++;
        return this.subscriptionId;
    }
    unsubscribe = (subscriptionId) => {
        delete this.subscriptions[subscriptionId];
    }
    notifySubscribers = () => {
        Object.values(this.subscriptions).forEach((cb) => cb())
    }
    mergeWithState = (stateChange) => {
        this.data = { ...this.data, ...stateChange };
        this.notifySubscribers();
    }
    setSearchTerm = (searchTerm) => {
        this.mergeWithState({ searchTerm });

    }
}
export default DataApi;