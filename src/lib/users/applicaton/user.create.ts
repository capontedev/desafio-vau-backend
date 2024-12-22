import { IUserCreate } from '../domain/entities/user.interface';
import { UserExists } from '../domain/errors/userExists';
import { UserRepository } from '../domain/repositories/user.repository';

export class UserCreate {
  constructor(private readonly repository: UserRepository) {}

  async run(user: IUserCreate): Promise<void> {
    const userData = await this.repository.getOneByEmail(user.email);
    
    if (userData) {
      throw new UserExists('user exists');
    }

    return this.repository.create(user);
  }
}