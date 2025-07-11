// Simple Node.js server for Azure compatibility

const {createRequestHandler} = require('@remix-run/express');
const express = require('express');
const path = require('path');

const BUILD_DIR = path.join(process.cwd(), 'dist', 'server'); // o 'dist' según tu build
const app = express();

app.use(express.static('public'));

app.all(
  '*',
  createRequestHandler({
    build: require(BUILD_DIR),
    mode: process.env.NODE_ENV,
  }),
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
