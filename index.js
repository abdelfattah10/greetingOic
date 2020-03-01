const express = require('express');
const app = express();

app.get('/greeting/:name', function(req, res){
  res.json({
    resp: 'Hello '+req.params.name,
    country: 'World'
  })
})

app.listen(5000);
