import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import cookieParser from 'cookie-parser';
import commentRoutes from './routes/comment.route.js'
import postRoutes from './routes/post.route.js'

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGO).then(() => {
        console.log("db connected")
    })
    .catch((e) => {
        console.log(e);
    })

app.listen(3000, () => {
    console.log('server is running')
})

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/post', postRoutes)
app.use('/api/comment', commentRoutes)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});