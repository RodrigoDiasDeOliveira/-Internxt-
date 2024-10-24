import { Request, Response } from 'express';
import User from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

 export const register = async (req: Request, res: Response) => {
  const { username, email,password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
      username,
      email,
      password: hashedPassword,
});
await newUser.save();
res.status(201).json({ message: 'Usuário registrado com sucesso.' });

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).send('Credenciais inválidas.');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).send('Credenciais inválidas.');
    }

    // Geração do token JWT
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
    res.status(200).json({ token });
    }};