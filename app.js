const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

const app = express();

//mongodb and connection
const db = require('./config/keys').mongoURI;
mongoose.connect(db, {
        useNewUrlParser: true
    })
    .then(console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Body Parser 
app.use(express.urlencoded({
    extended: false
}));

// Routes 
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/dashboard', require('./routes/dashboard'));

//styles
app.use(express.static('./public'))


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on ${PORT}`));