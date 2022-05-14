import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import indexRouter from './server/routes/index.js';
import userRouter from './server/routes/user.js';
import searchRouter from './server/routes/search.js';
import { fileURLToPath } from 'url';
import tableRouter from './server/routes/table.js';

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

app.use('/index', indexRouter);
app.use('/user', userRouter);
app.use('/search', searchRouter);
app.use('/table', tableRouter);

export default app;
