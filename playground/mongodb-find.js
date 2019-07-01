//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server.');
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');


    db.collection('Todos').find().count().then((count)=>{
        console.log(`Todos count ${count}`);
        //console.log(JSON.stringify(docs,undefined,2));
    },(err) =>{
        console.log("Unable to  fetch!",err);
    });

    const DB = client.db('TodoApp');

    DB.collection('Users').find({name: 'Prince Raj'}).toArray().then((docs)=>{
        var num = docs.length;
        console.log(`Users count ${num}`);
        console.log(JSON.stringify(docs, undefined,2));
    }, (err) => {
        console.log('Unable to fetch!');
    })

    // client.close();
});