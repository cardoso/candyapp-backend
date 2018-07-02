var express = require('express')
var app = express()
var request = require("request");
var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native

app.listen(port = process.env.PORT || 8000, function(){
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
  res.send(req)
  
})


app.post('/', function (req, res) {
  res.send(JSON.stringify(req.body))
})





