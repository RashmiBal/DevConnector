const express = require('express');
const mongoose = require('mongoose');
const bodypaser = require('body-parser');
const app = express(); //router

const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');

// Body parser middleware
app.use(bodypaser.urlencoded({extended: false}));
app.use(bodypaser.json());

// connect to db
mongoose.connect(db).then(() => console.log('mongodb connected')).catch((err)=> console.log(err));

// lets write first route
app.get('/', (req,res) => res.send('HelloWorld!'));

app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/profile', profile);

const port = process.env.PORT || 5300;
app.listen(port, () => console.log(`Server running on port ${port} `));