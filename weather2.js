let request = require('request');

let apiKey = 'b37fa0c2b27da412156eec37e1a59ec8';
let location = 'melbourne';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`

request(url, function (err, response, body) {
if(err){
    console.log('error:', err);
} else {
    console.log('body:', body);
}
});