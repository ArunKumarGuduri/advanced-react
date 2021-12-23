import express from 'express';
import config from './config';
const app = express();
app.use(express.static('public'));

// telling app to use ejs as template language
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { message: 34 });
});
app.listen(config.port, function listenHandler() {
    console.info(`Running on port ${config.port}...`);
});