const router = require('express').Router();
const passport = require('passport');

//auth login 
router.get('/login',(req,res)=>{
   res.render('login');
});

router.get('/success',function (req,res){
    res.render("success");
})
router.get('/failure',(req,res)=>{
    res.render("failure login");
})
router.get('/logout',(req,res)=>{
    res.send('logging out');

});

router.get('/google',passport.authenticate('google',{
    scope:['profile']
}));

//callback route 
router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
console.log("some")
    res.send(req.user);
    res.redirect('/success');
    req.session.save(() => {
        res.redirect('/success');
      })
});
module.exports = router;