const express = require('express');
const app = express();



app.get('/', function(req, res){
  res.send('HelloWorld');
})

app.get('/greeting/:name', function(req, res){
  res.json({
    resp: 'Hello '+req.params.name,
    country: 'World'
  })
})

app.listen(process.env.PORT || 5000);
