//********************************/
// PROTOBUF CODE
//********************************/
var message = require("./test_message_pb.js")
person = new message.Person()
person.setId(100)
console.log(person.getId())

//********************************/
// REDIS CODE
//********************************/
var redis = require('redis');
var client = redis.createClient('6379', '127.0.0.1');
//this variable will hold the result of the client.get return value
var foo

client.on('connect', function() {
    console.log('Redis client connected');
});

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

client.set('my test key', 'my test value', redis.print);
client.get('my test key', function (error, result) {
    if (error) {
        console.log(error);
        throw error;
    }
    foo = result
    console.log('GET result ->' + result);
});

/*********************/
// NODE SERVER CODE
/*********************/

const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res){
    
    res.sendFile(__dirname + "/" + "index.html")
    
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
