var express = require('express')
var app = express()
var request = require("request");




var options = { method: 'GET',
  url: 'http://localhost:8000',
  headers: 
   { 'Postman-Token': '3bc49eb4-dfc2-43ae-9a6d-4cca5c50d1e6',
     'Cache-Control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});




var options = { method: 'POST',
  url: 'http://localhost:8000',
  headers: 
   { 'Postman-Token': '95c8ce6a-8470-4f85-954f-80ce752f7d2e',
     'Cache-Control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});



app.listen(port = 8000, function(){
  console.info('Server listening on port ' + port);
});

function lapada(componente){

  componente.tipo = "resistor";
  
}

var componente = {
  name : "resistor",
  tipo : "pull-up",
  local : "1",
  fullproduto : function() {
      return this.name + " " + this.tipo + " " + this.local;
  }
};
//console.log("componente:" + componente.tipo,"local:" + componente.local);


app.get('/', function (req, res) {
  res.send('componentes do  lapada')
  
})


app.post('/', function (req, res) {
  res.send('post:lapada')
})





