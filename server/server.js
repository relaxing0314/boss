const express = require('express')
const mongoose = require('mongoose')

const app = express()
const DB_URL = 'mongodb://127.0.0.1:27017/imooc'

mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
	console.log('mongo connect success')
})

const User = mongoose.model('user',new mongoose.Schema({
	user:{
		type:String,
		require:true
	},
	age:{
		type:Number,
		require:true
	}
}))

User.create({
	user:'spring',
	age:18
},function(err,doc){
	if(!err){
		console.log(doc)
	}else{
		console.log(err)
	}
})

user.remove({
	age:18
},function(err,doc){
	console.log(doc)
})

User.update({
	"user":"xiaoming"
},{
	"$set":{
		age:26
	}
},function(err,doc){
	console.log(doc)
})

app.get("/",function(req,res){
	res.send('<h1>Hello world</h1>')
})

app.get('/data',function(req,res){
	User.find({},function(err,doc){
		res.json(doc)
	})
})

app.listen(9093,function(){
	console.log('Node app start at port 9093')
})
