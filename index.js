var express = require('express')
var app = express()
var request = require("request");
var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native





app.get('/listComponentes', function (req, res) {
  console.log("componentes do lapada"),
   fs.readFile( __dirname + "/" + "componentes.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

var componente = {
    "componente4" : {
       "name" : "mohit",
       "tipo" : "password4",
       "local" :"gaveta2",
    } 
 }
 
 app.post('/addComponente', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "componentes.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        data["componente4"] = componente["componente4"];
        console.log( data );
        res.end(JSON.stringify(data));
    });
 })
 


const PORT = process.env.PORT || 8000 
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

// app.listen(port = process.env.PORT || 8000, function () {
//   console.info('Server listening on port ' + port);
//   });


// var componente = {
//   name: "componente4",
//   tipo: "pull-up",
//   local: "gaveta"
//   }

// //console.log("componente:" + componente.tipo,"local:" + componente.local);


// app.get('/componentes', function (req, res) {
//   fs.readFile(__dirname + "/" + "componentes.json", 'utf8', function (err, data) {
//     console.log(data);
//     res.end(data);
//   })


//   app.post('/addComponente', function (req, res) {
//     // First read existing users.
//     fs.readFile(__dirname + "/" + "componentes.json", 'utf8', function (err, data) {
//       data = JSON.parse(data);
//       data["componente4"] = componente["componente4"];
//       console.log(data);
//       res.end(JSON.stringify(data));
//     })
//   })
