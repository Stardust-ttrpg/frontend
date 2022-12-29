var port = process.env.PORT || 3000;
var express = require('express');
var app = express();
var fs = require('fs');

const gingerbreadAscii = () => {
  return fs.readFileSync("./ascii.txt",{encoding:'utf8', flag:'r'}).toString();
}

app.get('/', function (req, res) {
  res.set({ 'content-type': 'text/html; charset=utf-8' });
  res.send(`<pre style="font-size:.45em;">${gingerbreadAscii()}</pre>`);
});

app.listen( port, function () {
  console.log(`Listening on port ${port}!`);
});