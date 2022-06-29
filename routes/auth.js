import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello Auth Endpoint!');
})

router.get('/register', (req, res) => {
    res.send('Hello Auth-Register Endpoint!');
})

export default router