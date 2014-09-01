// Requires
var express = require('express');
var path = require('path');
var querystring = require("querystring");
var url = require('url');
var gpio = require('pi-gpio');

// Create app
var app = express();
var port = 8000;

// Set views
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

// Serve files
app.get('/interface', function(request, response){
  response.sendFile('views/interface.html')
});

// Send commands to PI
app.get("/send", function(request, response){
    
    // Get data
    var queryData = url.parse(request.url, true).query;
    console.log("State " + queryData.state + " received.");

    // Apply command
    if (queryData.state == 'on') {
      gpio.open(11, "output", function(err) {     
        gpio.write(11, 1, function() {  
            gpio.close(11);                   
        });
    });
    }
    if (queryData.state == 'off') {
    gpio.open(11, "output", function(err) {     
        gpio.write(11, 0, function() {  
            gpio.close(11);                   
        });
    });
    } 
    
    // Answer
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end();
});

// Start server
app.listen(port);
console.log("Listening on port " + port);