import { Request } from 'express';

interface User {
  id: string;
  email: string;
  
}


declare global {
  namespace Express {
    interface Request {
      user?: any;     }
  }
}
