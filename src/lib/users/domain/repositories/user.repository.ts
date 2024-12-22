import { IUserCreate, IUserCreated, IUserLogged } from '../entities/user.interface';

export interface UserRepository {
  create(user: IUserCreate): Promise<void>;
  login(email: string, password: string): Promise<IUserLogged | null>;
  getOneByEmail(email: string): Promise<IUserCreated | null>
  getAll(): Promise<IUserCreated[]>;
}