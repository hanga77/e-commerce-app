import bcrypt from 'bcryptjs';
import User from '../Models/userModels.js';
import { generateToken } from '../utils.js';
import expressAsyncHandler from 'express-async-handler';

export const GetUser = expressAsyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user),
      });

      return;
    }
  }
  res.status(401).send({ message: 'Invalide email ou password' });
});

export const checkRequest = (err, req, res, next) => {
  res.status(500).send({ message: err.message });
};
