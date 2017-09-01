const request = require ('request');

let url = 'http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/today';
let header = 'accept: application/json';
request.get({uri:url, headers:header }, function (error, response, body){
    if(!error && response.statusCode === 200) {
        console.log(body);
        let obj = JSON.parse(body);
        console.log(`Date = ${obj.date}: ${obj.celebrations[0].title}. Vestments: ${obj.celebrations[0].colour}.`);
    }
});

