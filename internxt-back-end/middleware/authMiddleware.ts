import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).send('Acesso negado.');

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = verified; // Você pode querer adicionar isso à interface Request
    next();
  } catch (error) {
    res.status(400).send('Token inválido.');
  }
};

export default authMiddleware;
