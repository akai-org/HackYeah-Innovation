import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';

const users = [
  {
    id: 0,
    username: 'admin',
    pHash: '$2a$12$rF6Hhlbt2AAdmU684fYVMe/Q9dRs7t5EGH7O9vYh0.iOTdkEdqYVq',
  },
];

export const login = (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username);
  if (!user) {
    return res.status(401).json({ message: 'podpowiedz: login to admin' });
  }

  bcrypt.compare(password, user.pHash, (err, isMatch) => {
    if (err) {
      return res.status(500).json({ message: 'Server error' });
    }

    if (isMatch) {
      return res.json({ message: 'Login successful' });
    } else {
      return res.status(401).json({ message: 'podpowiedz: haslo to dupa' });
    }
  });
};