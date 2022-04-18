/*

import { QueryInterface, Sequelize } from 'sequelize/types';
import express from 'express';

const app = express();

const urlEncodedParser = app.use(express.urlencoded({ extended: false }));

const jsonParser = app.use(express.json());

app.use((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.write('you posted:\n');
  res.end(JSON.stringify(req.body, null, 2));
});

// log in
// POST /login gets urlencoded bodies
app.post('/login', urlencodedParser, (req, res) => {
  res.send(`welcome, ${req.body.username}`);
});
// create account
app.post('/api/users', jsonParser, (req, res) => {
  // create user here
});

// req.url = '/response.json' we're looking for
// req.method GET/PUT/POST/ETC
// req.headers HTTP HEADERS
// req.query
// /people.json?foo=bar === request.query['foo'] = 'bar'
// app.use(express.bodyParser());

app.use(express.json()); // JSON encoded
app.use(express.urlencoded({ extended: true })); // URL encoded

// assuming POST: name=foo&color=red            <-- URL encoding
//
// or       POST: {"name":"foo","color":"red"}  <-- JSON encoding

app.post('/test-page', (req, res) => {
  let name = req.body.name,
    color = req.body.color;
    // ...
});
*/