var express = require('express');
var app = express();
var fs = require('fs');
var stringifyFile;
var bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/getNote', function (req, res) {
    fs.readFile('./test.json', 'utf-8', function(err, data) {
    	if(err) throw err;
    	stringifyFile = data;
    	res.send(data);
    });
});

app.post('/updateNote/:note', function (req, res) {
	var newNote = req.params.note;
	fs.writeFile('./test.json', newNote, function(err) {
		if(err) throw err;
		console.log('file updated');
	});
	res.send(` "${newNote}" został zapisany do pliku test.json`);
});


app.listen(3000);