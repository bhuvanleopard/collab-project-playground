import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/welcome', (_req, res)=>{

    return res.status(200).json({msg: "welcome to server: 3010"})
})

app.use((_req, res)=>{

    return res.status(400).json({msg: "undefined route"});

})

app.listen(3010, (err: any)=>{

    if(err) return console.log(`server couldn't start: ${err}`)
    else return console.log('server started');

})