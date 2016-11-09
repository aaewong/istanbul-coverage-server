var coverage = require('istanbul-middleware');
var express = require('express');
var app = express();

app.use('/coverage', coverage.createHandler());
app.listen(8888, () => {
  console.log('View the coverage report at http://localhost:8888/coverage');  
});

