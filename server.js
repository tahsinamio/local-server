const express = require('express');

var app = express();

app.get('/', (req, res) => {
	res.send('Tahsin Amio loves contributing to ScoreLab.');
});

app.listen(8080);
