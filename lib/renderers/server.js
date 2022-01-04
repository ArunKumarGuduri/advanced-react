import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import App from "components/App";
import StareApi from "state-api";
import config from 'config';

const serverRender = async () => {
    const res = await axios.get(`http://${config.host}:${config.port}/data`);
    const store = new StareApi(res.data);
    return {
        initialMarkup: ReactDOMServer.renderToString(<App store={store} />),
        initialData: res.data
    }
};
export default serverRender;