import React from "react";
import ReactDOM from "react-dom";
import App from "components/App.js";
import StareApi from "state-api";

export default App;
const store = new StareApi(window.initialData);
ReactDOM.render(<App store={store} />, document.getElementById('root'))
