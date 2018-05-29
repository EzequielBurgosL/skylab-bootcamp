const {MongoClient, ObjectId} = require('mongodb')

var obj = new ObjectId();
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('unable to connect to mongodb server')
    }
    console.log('connected to Mongodb server')
    const db = client.db('TodoApp')


    // db.collection('Users').insertOne({
    //     name: 'Ezequiel',
    //     age: 28,
    //     location: 'Barcelona',
    //     complete: false,
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('unable to insert todo', err)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // });

    client.close()
})