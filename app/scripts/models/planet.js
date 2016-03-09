var Backbone = require('backbone');
var $ = require('jquery');

var Planet = Backbone.Model.extend({
  // defaults: {
  //   'buttonLabel': 'Submit'
  // },
  // initialize: function(){
  //   $('.buttonLabel').text('Loading...');
  // }
});

var PlanetCollection = Backbone.Collection.extend({
  model: Planet,
  url: 'http://swapi.co/api/planets/',
  parse: function(data){
    return data.results;
  }
});

module.exports = {
  'Planet': Planet,
  'PlanetCollection': PlanetCollection
};
