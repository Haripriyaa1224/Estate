import User from '../models/userModel.js';
import bcryptjs from 'bcryptjs';

export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;

  //hasing password with bcrypt
  const salt = bcryptjs.genSaltSync(10);

  const hashedPassword = bcryptjs.hashSync(password, salt);

  //save to DB
  const newUser = new User({ username, email, password: hashedPassword });
  
  try {
      await newUser.save();
      res.status(201).json('User created successfully!');

  } catch (error) {
    next(error);
  }
};