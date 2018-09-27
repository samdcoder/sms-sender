const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const User = require('./models/user');
const env = require('./env');
const PORT = process.env.port || 3000; 

//mongoose.connect('mongodb+srv://samdcoder:'+env.mongopw+'@cluster0-bcmtk.mongodb.net/test?retryWrites=true');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser());

app.get('/', function(request, response){
	response.sendFile('index.html');
});

app.post('/', function(request, response){
		console.log("in the root call!");
		var user_email = request.body.email;
		
		//save data to the database
		const user = new User({
			_id: new mongoose.Types.ObjectId(),
			name: request.body.name,
			email: request.body.email,
			phone:  request.body.phone,
			job: request.body.job
		});

		user.save(function(err){
			if(err){
				response.send({'message': err, 'code':400});
				console.log("Error: ", err);
				return;
			}
		});
		response.send({'message': 'Successfully stored the data!', 'code':200});
		
	
});

app.get('/contacts', function(request, response){

	response.sendFile('contacts.html', {root: path.join(__dirname, 'public')});
	
});

app.get('/getJson', function(request, response){
	var obj = JSON.parse(fs.readFileSync('contacts.json', 'utf8'));
	console.log(obj);
	response.json(obj);
});

app.use(function(request, response, next){
  response.sendFile('404.html', {root: path.join(__dirname, 'public')});
  });

app.listen(PORT, function(){
	console.log("server listening on port " + PORT);
});



