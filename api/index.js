import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/userRoute.js';
import authRouter from './routes/authRoute.js';
import dotenv from 'dotenv/config';

// dotenv.config();

//Connect to DB
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });



const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
    }
)

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);