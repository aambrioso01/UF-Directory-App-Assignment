var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {

  var parsedUrl = url.parse(request.url).parsedUrl;

  if( parsedUrl == '/listings' )
  {
    response.write(listingData);
  }
  else
  {
    response.write(404);
  }
  /*
    Your request handler should send listingData in the JSON format if a GET request 
    is sent to the '/listings' path. Otherwise, it should send a 404 error. 
    HINT: explore the request object and its properties 
    http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
   */
};

fs.readFile('listings.json', 'utf8', function(err, data) {
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
  var request = new XMLHttpRequest();
  request.open("GET", "listings.json", false);
  request.send(null);
  request.onreadystatechange = function() {
    if ( request.readyState === 4 && request.status === 200 ) {
      var listingData = JSON.parse(request.responseText);
      console.log(listingData);
    }
  }

  server = http.createServer(requestHandler).listen(port, function() {
    console.log('Server listening on: http://127.0.0.1:' + port)
  });
  /*
    This callback function should save the data in the listingData variable, 
    then start the server. 
   */
});