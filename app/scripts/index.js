var $ = require('jquery');
var Backbone = require('backbone');


var models = require('./models/planet');
var starWarsPlanet = new models.PlanetCollection();

var planet = new models.Planet();


$('button').click(function(){
  $('.buttonLabel').html('Loading...');
  $('.buttonLabel').prop('disabled', true);
//$('.buttonLabel').append('Loading...');
starWarsPlanet.fetch().done(function(){
  starWarsPlanet.each(function(planet){
    $('.buttonLabel').html('Submit');
    $('.buttonLabel').prop('disabled', false);
    console.log(planet.get('name') + ', population = (' + planet.get("population") +')');
  // var planetStats = planet.get("name") + '(' + planet.get("population") +')';
    });
  });
});
