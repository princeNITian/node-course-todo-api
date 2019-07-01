//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server.');
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');
// deleteMany

// db.collection('Users').deleteMany({name: 'Prince Raj'}).then((result) => {
//     console.log(result);
// });


//deleteOne

// db.collection("Users").deleteOne({name: 'Prince Raj'}).then((result) =>{
//     console.log(result);
// });


// findOneAndDelete

// db.collection('Users').findOneAndDelete({name: 'Prince Raj'}).then((result) => {
//     console.log(result);
// });



    // client.close();
});