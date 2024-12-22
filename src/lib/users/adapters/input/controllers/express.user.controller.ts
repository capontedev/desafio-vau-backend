import { NextFunction, Request, Response } from 'express';
import { IUserCreate, IUserLogged, IUserLogin } from '../../../domain/entities/user.interface';
import { ServiceContainer } from '../../../../shared/adapters/ServiceContainer';
import { Unauthorized } from '../../../../shared/errors/unauthorized';
import { UserNotFound } from '../../../domain/errors/userNotFound';
import { UserExists } from '../../../domain/errors/userExists';
import { validationResult } from 'express-validator';

export class ExpressUserController {
  async create(req: Request<{}, {}, IUserCreate>, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array() })
      }

      await ServiceContainer.user.create.run(req.body);
      return res.status(201).send();
    } catch (error) {
      if (error instanceof UserExists) {
        return res.status(409).json({ message: error.message })
      }

      next(error);
    }
  }

  async login(req: Request<IUserLogged, {}, IUserLogin>, res: Response, next: NextFunction){
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array() })
      }

      const user = await ServiceContainer.user.login.run(req.body.email, req.body.password);
      return res.json(user).status(200);
    } catch (error) {
      if (error instanceof UserNotFound) {
        return res.status(404).json({ message: error.message })
      }

      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization?.split(' ')[1] ?? null;
      const users = await ServiceContainer.user.getAll.run(token);
      return res.json(users).status(200);
    } catch (error) {
      if (error instanceof Unauthorized) {
        return res.status(401).json({ message: error.message })
      }

      next(error);
    }
  }
}