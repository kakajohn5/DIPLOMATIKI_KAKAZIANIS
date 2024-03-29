const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const {check, validationResult} = require('express-validator');
const Post = require('../../models/Post');
const Profile = require('../../models/Profile');
const User = require('../../models/User');



//@router Post api/posts
//@desc   Create Post
//@access Private
router.post('/',[auth, [
    check('text', 'Text is required').not().isEmpty()
]
], 
async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()});
    }
    try {
         const user = await User.findById(req.user.id).select('-password');

         const newPost = new Post({
            text: req.body.text,
            name: user.name,
            avatar: user.avatar,
             user: req.user.id
       })
       const post = await newPost.save();

       res.json(post);
    
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');        
    }
//@router Get api/posts
//@desc   Get all users comments
//@access Private
router.get('/', auth, async (req, res) => {
    try{
        const posts = await Post.find().sort({ date: -1});
        res.json(posts);
      
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
} );

//@router Get api/posts/id
//@desc   Get post by id
//@access Private
router.get('/:id', auth, async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        res.json(post);
    }catch(err){
        console.error(err.message);
        if(err.kind === 'ObjectId'){
            return res.status(404).json({ msg: 'Post not found'});
        }
        
        res.status(500).send('Server Error');
    }
} );

//@router Delete api/posts
//@desc   Delete  post
//@access Private
router.delete('/:id', auth, async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);

        //Check user
        if(post.user.toString() !== req.user.id ){
            return res.status(401).json({ msg: 'User not authorized'});
        }
        await post.remove();


        res.json('Post removed');
      
    }catch(err){
        console.error(err.message);
        if(post.user.toString() !== req.user.id ){
            return res.status(401).json({ msg: 'Post not found'});
        }
        res.status(500).send('Server Error');
    }
} );

});

module.exports = router;
