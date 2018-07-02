var express = require('express')
var app = express()
var request = require("request");
var pg = require('pg');
const util = require('util');
//or native libpq bindings
//var pg = require('pg').native

app.listen(port = process.env.PORT || 8000, function(){
  console.info('Server listening on port ' + port);
});


var componente = {
  name : "componente4",
  tipo : "pull-up",
  local : "1",
  fullproduto : function() {
      return this.name + " " + this.tipo + " " + this.local;
  }
};

var componentes = [resistor, capacitor, bateria]
//console.log("componente:" + componente.tipo,"local:" + componente.local);


app.get('/componentes', function (req, res) {
  fs.readFile( __dirname + "/" + "componentes.json", 'utf8', function (err, componentes) {
    console.log(componentes);
    res.end(componentes);
})


app.post('/addcomponente', function (req, res) {

  fs.readFile( __dirname + "/" + "componentes.json", 'utf8', function (err, componentes) {
    data = JSON.parse( componentes );
    componentes["componente4"] = componentes["componente4"];
    console.log(componentes);
    res.end( JSON.stringify(componentes));
});

})





