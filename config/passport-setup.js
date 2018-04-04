const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

passport.use(
    new GoogleStrategy({
callbackURL:'http://localhost:3000/auth/google/redirect',
clientID: keys.google.clientID,
clientSecret:keys.google.clientSecret
},(accessToken,refrestToken,profile,done)=>{
    console.log('accessT==>',accessToken);
    console.log('refreshToken==>',refrestToken);
    
    console.log("passport callback function fired");
    console.log(profile);
    console.log('done==>',done);
   
       
}));


