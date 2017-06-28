
const models = require('./models');

// models.Movie.create({
//   title: "Home Alone 2: Lost in New York",
//   release_date: new Date(1997, 5, 12),
//   imdb_link: "www.daggerarcadia.tumblr.com"
// });

//searches in the database. find one will always return a row from database where the title is The Fountain.
models.Movie.findOne({
  where: {
    title: "The Fountain"
  }
  //this is a promise
}).then(function(movie){
  console.log(movie.release_date); //model definition (table) should have a capital letter, the row in the Movie table makes the movie lowercase.
});
