// server.js
// load the things we need
var express = require('express');
var app = express();
const fetch = require('node-fetch');

const URL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=03e2222b7dc6978741ae08c575363267&language=en-US&page=1';
var movieList = [];

app.use(express.static(__dirname + '/public'));
// set the view engine to ejs
app.set('view engine', 'ejs');

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// movies page
app.get('/movies', function(req, res) {

    getMovies();
    res.render('pages/movies');
});

var getMovies = () => {
  fetch(URL)
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    console.log(json.results[0].title);
    console.log(json.results[0].overview);
    console.log(json.results[0].vote_average);
    console.log(json.results[0].poster_path);
    // console.log(results);
  });
}
app.listen(8080);
console.log('8080 is the magic port');
