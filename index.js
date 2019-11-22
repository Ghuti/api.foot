const express = require('express');
const mysql = require('mysql');


const app = express();
const http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('chat message', function(msg){
    io.emit('new message' , msg);
  });
});

http.listen(3000, function(){
  console.log('http://localhost:3000');
});

/*const kikou = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'football_french_chiampionship'
});

app.get('/teams', function (req, res) {
  kikou.query('SELECT * FROM coachs', function( err, data){
    res.json(data);
  })
});

app.get('/players/:teamId', function(req, res){
  const teamId = req.params.teamId;
  kikou.query('SELECT * FROM players JOIN players_has_teams ON players_has_teams.id_player = players.id WHERE players_has_teams.id_team =' + teamId, function( err, data){
    res.json(data);
  })
})

app.listen(3000, function() {
    console.log('http://localhost:3000');
})*/








/*const express = require('express');
const app = express();

console.log(__dirname);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html')
})

app.listen(3000, function() {
    console.log('Exemple');
})*/
