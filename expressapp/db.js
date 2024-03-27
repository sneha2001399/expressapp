const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://nitinoytie:Nitin%40oytie@cluster0.gjlozo2.mongodb.net/',{useNewUrlParser:true});

const db=mongoose.connection;
db.on('errer',console.error.bind(console,'connection error'));
db.once('open',function(){
    console.log('Database Connected Successfully..');
})