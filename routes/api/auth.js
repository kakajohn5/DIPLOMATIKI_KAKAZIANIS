const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const { check, validationResult } = require(`express-validator`);
const jwt = require('jsonwebtoken');
const config = require('config');
//@router Get api/auth
//@desc   Test router
//@access Public
router.get('/', auth, async (req,res) => 
{ try{
    const user = await  User.findById(req.user.id).select('-password');
    res.json(user);
 }catch(err){
     console.error(err.message);
     res.status(500).send('Server Error');
 }}
);

//@router Post api/auth
//@desc   authenticate auth
//@get token
router.post('/',
 [
    check('email', 'Please include a valid email').isEmail(),
    check('password','Please enter is required'
    ).exists()
], 
async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()});
    }

    const { email, password} = req.body;
    try{
     let user = await User.findOne( { email} );
     if(!user){
        return res.status(400).json({errors: [{msg: 'Invalid credentials'}]});
     }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
        return res
        .status(400)
        .json({errors: [{msg: 'Invalid credentials'}]});        
    }

    //Return jsonwebtoken
    const payload = {
        user: {
            id: user.id
        }
    }

    jwt.sign(
        payload,
         config.get(`jwtSecret`),
         {expiresIn: 36000},
        (err, token) => {
            if(err) throw err;
            res.json({token});
        }
         );

    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
   // res.send('User route');
});

module.exports = router;
