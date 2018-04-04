const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const app = express();
var session = require('express-session');
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  //cookie: { secure: true }
}))
app.set('view engine','ejs');

app.use('/auth',authRoutes);
app.get('/',(req, res)=>{
    res.render('home');
});
app.listen(3000, ()=>{
    console.log('app now listening for requests on port 3000');
});