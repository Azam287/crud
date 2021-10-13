const router = require('express').Router()
const User = require('../models/postData')


// getting data
router.get('/', async(req,res)=>{
    try{
        const posts = await User.find()
        res.json(posts)
    }
    catch(error){
        res.json({message: error})
    }
})

// posting data to the database
router.post('/post', async(req,res)=>{
    const post = new User({
        username: req.body.username,
        password: req.body.password
    })

    try{
        const savedUser = await post.save()
        console.log(savedUser)
        res.json(savedUser)
    }
    catch(error){
        res.send({message:error})
    }
    
    
});


//find specific post in database
router.get('/find/:postId', async (req,res)=>{

    try{
        const post = await User.findById(req.params.postId)
        if(post){
            res.json(post)
        }
        else{
            res.send("No such post")
        }
    }
    catch(error){
        res.json({message: error})
    }
        
})

router.delete('/delete/:postId', async (req,res)=>{
    try{
        const removePost = await User.remove({_id: req.params.postId})
        if(removePost){
            res.json({message: removePost})
        }
        else{
            res.send("No such record")
        }
    }
    catch(error){
        res.json({message:error})
    }
    
})


// Update a post
router.patch('/update/:postId', async (req,res)=>{
    try{
        const updatedPost = await User.updateOne(
            {_id:req.params.postId},
            {$set: {username: req.body.username}}
            )
        
            res.json(updatedPost)
    }
    catch(error){
        res.json({message: error})
    }
})

module.exports = router
