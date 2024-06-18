import express from 'express';
import mongoose from 'mongoose';
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

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
    }
)