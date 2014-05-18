
var express = require('express'),
              http = require('http');

var app = express()
          .use(express.bodyParser())
          .use(express.static('public'));

var sql = require('mssql'); 

var config = {
    user: "BestDeveloper",
    password: "BeTheBest159+",
    server: 'cssc.mine.nu\\CSSQL',
  	database: 'PRUEBAS'
};

app.get('/',	function(req, res) {

	res.sendFile('.public/index.html');

});

app.get('/loadData', function(req, res){

	$consultSql = "SELECT TOP 10 prov_des, rif, co_zon, ciudad, zip, telefonos, fax, respons, email, website, direc1, direc2 FROM saProveedor";

	var connection = new sql.Connection(config, function(err) {

		var request = new sql.Request(connection);

		request.query(	$consultSql,	function(err, recordset) {

	        console.dir(recordset);

	        res.json(recordset);

	    });

	});

});

http.createServer(app).listen(3000, function () {

  console.log("Servidor listo escuchando: http://localhost:3000");

});