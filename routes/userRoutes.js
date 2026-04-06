import express from 'express';
import User from '../models/user';

const router = express.Router();

// create user
router.post('/add',async(req,res)=>{
    try{
        const user = new User(req.body);
        await user.save();
        console.log('post user',user)
        res.send(user)
    }catch(err){
        res.status(500).send({error:err.message})
    }
})

//get all user

router.get("/",async(req,res)=>{
    try{
        const userRes = await User.find();
        console.log('userRes',userRes);
         res.send(userRes)
    }catch(err){
        res.status(500).send({error:err.message})
    }
})

module.exports = router;