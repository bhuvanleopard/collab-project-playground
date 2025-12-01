import express from 'express';

const route = express.Router();

route.get('/feature-01', (_req, res)=>{

    return res.status(200).json({msg: 'this is route for feature-01'});

})


export default route