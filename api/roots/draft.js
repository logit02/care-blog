const router = require('express').Router();
const draftPost = require('../models/draftPost')
const cors = require('cors')
router.use(cors());


router.post('/', async (req,res) => { 
    const newdraftPost = new draftPost(req.body);
    try{ 
        const draftSaved = await newdraftPost.save();
        res.status(200).json(draftSaved);
    }catch(err){
        res.status(500).json(err)
    }
})


router.get("/", async(req,res) =>{
    const username = req.query.user;
    try{
        let posts;
        if(username){
            posts = await draftPost.find({username});
        }else { 
            posts = await draftPost.find();
        }
        res.status(200).json(posts);
    }catch(err){
        res.status(500).json(err)
       
    }
})
module.exports = router