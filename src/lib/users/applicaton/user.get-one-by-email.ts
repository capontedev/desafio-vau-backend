import { IUserCreated } from '../domain/entities/user.interface';
import { UserRepository } from '../domain/repositories/user.repository';

export class UserGetOneByEmail {
  constructor(private readonly repository: UserRepository) {}

  async run(email: string): Promise<IUserCreated | null> {
    return this.repository.getOneByEmail(email);
  }
}