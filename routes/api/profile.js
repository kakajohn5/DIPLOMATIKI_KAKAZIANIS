const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const {check, validationResult} = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');
//@router Get api/profile/me
//@desc   Get current users profile
//@access Private
router.get('/me', auth, async (req, res) => {
    try{
        const profile = await Profile.findOne({ user: req.user.id}).populate(
            'user',
            ['name', 'avatar']
        );
        if(!profile){
            return res.status(400).json({ msg: 'There is no profile for this user'});
        }
        res.json(profile);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
} );

//@router Post api/profile/me
//@desc   Create or update users profile
//@access Private
router.get('/',[auth, [
    check('status', 'Status is required').not().isEmpty(),
    check('skills', 'Skills are reqiired').not().isEmpty()
]
], 
async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()});
    }
});
//@router Get api/profile/me
//@desc   Get all profiles
//@access Public
router.get('/', async (req, res) => {
    try{
        const profiles = await Profile.find().populate('user', ['name', 'avatar']);
        res.json(profiles);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});

module.exports = router;
