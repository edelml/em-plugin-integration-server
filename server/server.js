console.log('Server-side code running');

const express = require('express');

const app = express();

// serve files from the public directory
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('listening on 3000');
});

// serve the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/plugin1', (req, res) => {
  res.sendFile(__dirname + '/plugin1.html');
});

app.get('/plugin2', (req, res) => {
  res.sendFile(__dirname + '/plugin2.html');
});

app.get('/plugin3', (req, res) => {
  res.sendFile(__dirname + '/plugin3.html');
});

// add a document to the DB collection recording the click event
app.get('/clicked', (req, res) => {
  const click = {clickTime: new Date()};
  console.log(click);

  res.sendStatus(201);
});

// get the click data from the database
app.get('/clicks', (req, res) => {
   res.send(result);
});
