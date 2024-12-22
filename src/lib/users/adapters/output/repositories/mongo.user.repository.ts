import { IUserCreate, IUserLogged, IUserCreated } from '../../../domain/entities/user.interface';
import { UserRepository } from '../../../domain/repositories/user.repository';
import Users from '../persistence/mongo.user.model';

export class MongoUserRepository implements UserRepository {
  create(user: IUserCreate): Promise<void> {
    Users.create(user);
    return Promise.resolve();
  }
  
  async login(email: string, password: string): Promise<IUserLogged | null> {
    const user = await Users.findOne({
      email,
      password
    }, null, { lean: true });

    
    if (user) {
      return {
        id: user._id.toString() || '',
        username: user.username || '',
        email: user.email || '',
      }
    }

    return null;
  }

  getOneByEmail(email: string): Promise<IUserCreated | null> {
    return Users.findOne({
      email,
    });
  }

  async getAll(): Promise<IUserCreated[]> {
    const users = await Users.find({}, null, { lean: true });

    if (users) {
      return users.map(user => ({
        id: user._id.toString() || '',
        username: user.username || '',
        email: user.email || '',
      }));
    }

    return [];
  }
}