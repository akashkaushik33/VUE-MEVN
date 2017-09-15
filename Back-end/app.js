const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database')

const app = express();
const users  = require('./routes/users')

port = 3000;

mongoose.connect(config.database);
mongoose.connection.on('connected' , () => {
    console.log('connected to database: ' +config.link)
    
});

mongoose.connection.on('error' , (err) => {
    console.log('Error: ' +err);
});


app.use(cors());

app.use(bodyParser.json());

app.use('/users', users);

app.use(express.static(path.join(__dirname , 'public')))

app.use(passport.initialize());

app.use(passport.session());

require('./config/passport')(passport)





app.get('/' , (req , res) => {
    res.send('Server started');
})

app.listen(port , () => {
    console.log('Server started on port: ' + port);
});


