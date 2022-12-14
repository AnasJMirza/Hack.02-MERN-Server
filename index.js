import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import postRoutes from './src/routes/Posts.js'
import authRoutes from './src/routes/Auth.js';
// connection to db
import { connect } from './src/config/db.js';




const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors());
dotenv.config();

const port = 5000;


app.use(express.json());

// app.use('/api/auth', authRoutes)
app.use('/api/posts', postRoutes)




app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
    connect();
});