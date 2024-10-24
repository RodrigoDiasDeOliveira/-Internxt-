import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'Acesso negado. Token não fornecido.' });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = verified; // Verifique se você adicionou `user` à interface Request
    next();
  } catch (error) {
    return res.status(400).json({ message: 'Token inválido.', error: error.message });
  }
};

export default authMiddleware;

