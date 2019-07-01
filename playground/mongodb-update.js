//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server.');
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');
    
    // findOneAndUpdate
    db.collection('Users').findOneAndUpdate({
        _id: 123
    },{
        $set: {
            name: 'Prince Kumar',
        },
        $inc: {
            age: -2
        }
    },{
        returnOriginal: false,
    }).then((result) =>{
        console.log(result);
    });



    // client.close();
});