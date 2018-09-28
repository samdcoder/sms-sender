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

mongoose.connect('mongodb+srv://samdcoder:'+env.mongopw+'@smsdata-fkbfi.mongodb.net/test?retryWrites=true');

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

app.get('/api/sent', function(request, response){
	//fetching and sorting in descending order of the date
	History.find({}).sort('-createdAt').exec(function(err, docs) { 
			if(err){
				console.log("error: ", err);
				response.send({'message': 'error', 'code': 400});
			}
			response.send({'data': docs, 'code': 200});
	 });

});


//static file server

app.get('/', function(request, response){
	response.sendFile('index.html');
});

app.post('/', function(request, response){
		let otp = request.body['otp'];
		let user_message = ``;
		let firstName = request.body['firstName'];
		let lastName = request.body['lastName'];
		firstName = firstName.split(':')[1].trim();
		lastName = lastName.split(':')[1].trim();
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
	*/	

	//check the value of status 
	if(status == '0'){
		//sent message successfully
		//update in the database
		const record = new History({
			_id: new mongoose.Types.ObjectId(),
			firstName: firstName,
			lastName: lastName,
			otp: otp		
		});

		//writing to mongodb
		record.save(function(err, result){
			if(err){
				response.send({'message': err, 'code':400});
				console.log("Error: ", err);
			}
			console.log("No error. result = ", result);
		});

		response.send({'message': 'Successfully updated the log!', 'code':200});
	}
	else{
		response.send({'message': 'Could not send the message!', 'code': 400});
	}

});

app.get('/contacts', function(request, response){

	response.sendFile('contacts.html', {root: path.join(__dirname, 'public')});
	
});

app.get('/user/:id/', function(request, response){
	response.sendFile('user.html', {root: path.join(__dirname, 'public')});
	
});


app.get('/send-message-page/:id', function(request, response){
	response.sendFile('send_message.html', {root: path.join(__dirname, 'public')});	
});

app.get('/sent_page/', function(request, response){
	response.sendFile('sent_page.html', {root: path.join(__dirname, 'public')});	
});	


app.use(function(request, response, next){
  response.sendFile('404.html', {root: path.join(__dirname, 'public')});
  });

app.listen(PORT, function(){
	console.log("server listening on port " + PORT);
});



