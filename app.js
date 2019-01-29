var express = require("express");
var app = express();

/*
* Simple method it will dirrect render the output as it is
*/
app.get('/search1', callName); 
function callName(req, res) { 
    var spawn = require("child_process").spawn; 
    var process = spawn('python3',["./Best.py", req.query.search]);
    process.stdout.on('data', function(data) {
      res.send(data.toString());
    } )
}
//--------------------------------------------------------------------------------
/*
* method 2 if we want to render as html
* split('\n') help you to convert python3 output as array
*/
app.get('/search1', callName); 
function callName(req, res) { 
    var spawn = require("child_process").spawn; 
    var process = spawn('python3',["./Best.py", req.query.search]);
    process.stdout.on('data', function(data) {
    	result = [];
    	if(data){
	    	result = data.toString().split("\n");
    	}
    	res.writeHead(200, {'Content-Type': 'text/html'});
    	var html = '<center>';
    	for(var i = 0 ; i < result.length ; i++){
    		html += '<a href="'+result[i]+'">Result '+i+'</a><br>';
    	}
    	html += '</center>';
    	console.log(html);
        res.end(html);
    } )
}
//--------------------------------------------------------------------------------
/*
To search
http://localhost:3000/search1?search=nepsho
http://localhost:3000/search2?search=nepsho
*/

app.listen(3000, function () {
  console.log("server running on port 3000");
})
