const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();
// importing our database configuration
const connectDB = require('./MUGISHA CLINTON/config/dbConfig')

const app = express();

const formRoutes = require('./MUGISHA CLINTON/controllers/formRoutes')
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// calling the function
connectDB();

// setting up pug as our view engine
app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'MUGISHA CLINTON/views'));


// setting up directory for static files
app.use(express.static(path.join(__dirname, 'MUGISHA CLINTON/public')));

// using imported routes
app.use('/api', formRoutes)



// running the server on a specific port (3000)
// This should always be the last line in the server file
app.listen(3000, () => console.log('listening on port 3000'));
