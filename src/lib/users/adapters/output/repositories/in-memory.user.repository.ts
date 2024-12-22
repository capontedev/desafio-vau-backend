import { IUserCreate, IUserLogged, IUserCreated, IUser } from '../../../domain/entities/user.interface';
import { UserRepository } from '../../../domain/repositories/user.repository';

export class InMemoryUserRepository implements UserRepository {
  private users: IUser[] = [];

  create(user: IUserCreate): Promise<void> {
    this.users.push({
      id: (this.users.length + 1).toString(),
      email: user.email,
      password: user.password,
      username: user.username,
    });

    return Promise.resolve();
  }
  
  login(email: string, password: string): Promise<IUserLogged | null> {
    const user = this.users.find(user => user.email === email && user.password === password);

    if (!user) {
      return Promise.resolve(null);  
    }

    return Promise.resolve({
      id: user.id,
      username: user.username,
      email: user.email,
    });
  }

  getOneByEmail(email: string): Promise<IUserCreated | null> {
    const user = this.users.find(user => user.email === email);

    if (!user) {
      return Promise.resolve(null);  
    }

    return Promise.resolve({
      id: user.id,
      username: user.username,
      email: user.email,
    })
  }

  getAll(): Promise<IUserCreated[]> {
    return Promise.resolve(this.users.map(user => ({
      id: user.id,
      username: user.username,
      email: user.email,
    })));
  }
}