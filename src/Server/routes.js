import * as express from 'express';

import db from './DB/db';

const router = express.Router();

router.get('/api/users',async(req,res)=>{
try{
    let users = await db.Users.all();
res.json(users);}
catch(e){
    res.sendStatus(500);
}
})