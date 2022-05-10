import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import indexRouter from './server/routes/index.js';
import usersRouter from './server/routes/users.js';
import searchRouter from './server/routes/search.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

var app = express();

app.all('/', (req, res, next) => {
    next();
})
// response json parser
app.use(express.json());
// html form encoder
app.use(express.urlencoded({ extended: true }));
// cookie parser
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/search', searchRouter);
/*
app.get('/', function (req, res) {
    console.log('Cookies: ', req.cookies)

    // signed
    console.log('Signed Cookies: ', req.signedCookies)
})
*/
export default app;
