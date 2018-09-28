const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const History = require('./models/history');
const env = require('./env');
const utf8 = require('utf8');
const PORT = process.env.port || 3000; 
const Nexmo = require('nexmo');
const nexmo = new Nexmo({
 apiKey: env.API_KEY,
 apiSecret: env.SECRET
});

//mongoose.connect('mongodb+srv://samdcoder:'+env.mongopw+'@cluster0-bcmtk.mongodb.net/test?retryWrites=true');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


//APIs
app.get('/api/userData', function(request, response){

	let data_obj;
	for(key in request.query){
		data_obj = JSON.parse(key);
		break;
	}
	let uid = data_obj.uid;
	let user_details = {};
	let contacts = JSON.parse(fs.readFileSync('contacts.json', 'utf8'));
	contacts = contacts["contacts"];
	for(index in contacts){
		if(contacts[index].id == uid){
			user_details = contacts[index];
			break;
		}
	}
	response.json(user_details);
});

app.get('/api/contacts', function(request, response){
	var contacts = JSON.parse(fs.readFileSync('contacts.json', 'utf8'));
	response.json(contacts);
});



//static file server

app.get('/', function(request, response){
	response.sendFile('index.html');
});

app.post('/', function(request, response){
		let otp = request.body['otp'];
		let user_message = ``;
		console.log("request.body = ", request.body);
		user_message = request.body['message'];
		user_message = user_message.trim();
		let status = '0';

	/*	nexmo.message.sendSms(
   			"918149227289" , "918149227289", request.body['message'], {type: 'unicode'},
   				(err, responseData) => {if (responseData) {console.log(responseData);}}
   					if(responseData['messages'][0]['status'] == '0'){
						status = '0';
   					}
   					else{
						status = '-1';
   					}
 				);
 			response.send('SMS Message Sent');
	*/	

	//check the value of status 
	if(status == '0'){
		//sent message successfully
		//update in the database
	}

		//save data to the database
	/*	const user = new User({
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
		
		*/
});

app.get('/contacts', function(request, response){

	response.sendFile('contacts.html', {root: path.join(__dirname, 'public')});
	
});

app.get('/user/:id/', function(request, response){
	response.sendFile('user.html', {root: path.join(__dirname, 'public')});
	
});


app.get('/send-message-page/:id', function(request, response){
	response.sendFile('send_message.html', {root: path.join(__dirname, 'public')});	
})


app.use(function(request, response, next){
  response.sendFile('404.html', {root: path.join(__dirname, 'public')});
  });

app.listen(PORT, function(){
	console.log("server listening on port " + PORT);
});



