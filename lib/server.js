import express from 'express';
import config from './config';
import serverRender from 'renderers/server';
import { data } from "./testData";
// test data URL below
// https://gist.githubusercontent.com/samerbuna/5b53056342720b79ab19fc75629a9c8f/raw/f80d3d219d5913e0b36af1fcbb79c8721666fd49/react-blog-mockup-data.json
const app = express();
app.use(express.static('public'));

// telling app to use ejs as template language
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    const initialContent = await serverRender();
    res.render('index', { ...initialContent });
});
app.get('/data', (req, res) => {
    res.send(data);
});
app.listen(config.port, function listenHandler() {
    console.info(`Running on port ${config.port}...`);
});