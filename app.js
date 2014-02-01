


var express = require('express');

var http = require('http');



var app = express();



// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.bodyParser());

app.get("/", function(req, resp) { resp.end("YAY!");});
app.post('/__githubdeploy', function(req, resp) {
	
	var payload = resp.body.payload;
	var githubUrl = payload.repository.url + ".git";
	console.log("Deploying code from github url " + githubUrl);

});

var httpServer = http.createServer(app);
httpServer.listen(app.get("port"), function() {
	console.log('Server ready and listening on port ' + app.get('port'));
});