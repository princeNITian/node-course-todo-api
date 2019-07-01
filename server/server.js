var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

// var Todo = mongoose.model('Todo',{
//     text: {
//         type: String,
//         required: true,
//         minlength: 1,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     },
//     completedAt: {
//         type: Number,
//         default: null
//     }
// });

// // var newTodo = new Todo({
// //     text: 'Cook dinner'
// // });

// // newTodo.save().then((doc) =>{
// // console.log('Saved todo',doc);
// // },(e)=>{
// //     console.log('Unable to save todo');
// // });

// var otherTodo = new Todo({
//     text: 'Walk the dog'
//     // text: 'Feed the cat',
//     // completed: true,
//     // completedAt: 1223
// });

// otherTodo.save().then((doc) =>{
//     console.log(JSON.stringify(doc,undefined,2));
// },(e) =>{
//     console.log("Unable to save ",e);
// })

// save new something

var User = mongoose.model('User',{
    email: {
        type: String,
        minlength: 1,
        required: true,
        trim: true
    }
});

var user = new User({
email: 'prince@gmail.com'
});

user.save().then((doc) =>{
    console.log('User saved',doc);
},(e)=>{
    console.log('Unable to save user',e);
})

