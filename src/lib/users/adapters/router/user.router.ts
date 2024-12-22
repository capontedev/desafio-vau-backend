import { NextFunction, Request, Response, Router } from 'express';
import { ExpressUserController } from '../input/controllers/express.user.controller';
import { IUserCreate, IUserLogged, IUserLogin } from '../../domain/entities/user.interface';
import { userCreateValidation } from '../validators/user-create.validators';
import { userLoginValidation } from '../validators/user-login.validators';

const controller = new ExpressUserController();
const expressUserRouter = Router();

expressUserRouter.post('/users/', userCreateValidation(), (req: Request<{}, {}, IUserCreate>, res: Response, next: NextFunction) => { controller.create(req, res, next) });
expressUserRouter.post('/login/', userLoginValidation(), (req: Request<IUserLogged, {}, IUserLogin>, res: Response, next: NextFunction) => { controller.login(req, res, next) });
expressUserRouter.get('/users/', (req: Request, res: Response, next: NextFunction) => { controller.getAll(req, res, next) });

export { expressUserRouter };
