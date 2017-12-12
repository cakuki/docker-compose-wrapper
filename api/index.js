const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(express.json());

(async () => {
    const connection = await MongoClient.connect('mongodb://db:27017/example');
    const db = connection.db('example');
    const Post = db.collection('post');

    app.get('/', (req, res) => res.send('api is working!'));

    app.get('/posts', (req, res, next) => {
        Post.find(req.query).toArray()
            .then(result => res.send(result))
            .catch(next);
    });

    app.post('/posts', (req, res, next) => {
        Post.insert(req.body, { w:1 })
            .then(result => res.json(result))
            .catch(next);
    });

    app.listen(3000, () => console.log('Listening port 3000!'));
})()
