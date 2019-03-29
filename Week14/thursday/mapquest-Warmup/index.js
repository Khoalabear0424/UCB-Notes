var NodeGeocoder = require('node-geocoder');
 
var options = {
  provider: 'mapquest',
 
  // Optional depending on the providers
  httpAdapter: 'https', // Default
  apiKey: 'G2NQTtap1ahMeyGYZpGEjLqE5SoriMhB', // for Mapquest, OpenCage, Google Premier
  formatter: null         // 'gpx', 'string', ...
};
 
var geocoder = NodeGeocoder(options);
 
// Or using Promise
geocoder.geocode(process.argv.slice(2).join(' '))
  .then(function(res) {
    console.log(res);
  })
  .catch(function(err) {
    console.log(err);
  });
 