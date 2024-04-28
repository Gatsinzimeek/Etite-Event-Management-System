import express from 'express';
import dotenv from 'dotenv';
import AuthRoutes from './Routes/AuthRoutes.js';
import cors from 'cors';
import mongoose from 'mongoose';

    dotenv.config()
    const app = express();
// Database Connection
 mongoose.connect(process.env.MONGO_URL)
 .then(() => console.log('Database Connected'))
 .catch((err) => console.log('Database not Connected', err))

// Middleware 

app.use(express.json())

app.use('/',AuthRoutes);
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`listening on port of ${port}`);
} )