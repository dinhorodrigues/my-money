const port = 3001;

const bodyParse  = require('body-parser');
const express = require('express');
const app = express();
const allowCors = require('./cors');
const expressQuery = require('express-query-int')

app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json());
app.use(allowCors);
app.use(expressQuery())
app.listen(port, function(){
   console.log(`BACKEND is running on port ${port}.`);
    
});
module.exports = app;