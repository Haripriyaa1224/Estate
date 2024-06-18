import User from '../models/userModel.js';
import bcryptjs from 'bcryptjs';

export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;

  //hasing password with bcrypt
  const hashedPassword = bcryptjs.hashSync(password, 10);

  //save to DB
  const newUser = new User({ username, email, password: hashedPassword });
  
  try {
      await newUser.save();
      res.status(201).json('User created successfully!');

  } catch (error) {
    next(error);
  }
};