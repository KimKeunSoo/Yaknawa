const express = require('express');
const app = express();
const index = require('./routes/index');

app.use('/',index);

const port = 8080;

app.listen(port,()=>console.log(`Listening on port ${port}`));
