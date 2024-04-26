import express from 'express';

const router = express.Router();

const users = [
    {
        name: 'Gatsinzi',
        age: 43
    },
    {
        name: 'Ernest',
        age: 4
    }
]

router.get('/users', (req, res) =>{
    res.send(users);
})

export default  router;