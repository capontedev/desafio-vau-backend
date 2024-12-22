import { IUserLogged } from '../domain/entities/user.interface';
import { UserNotFound } from '../domain/errors/userNotFound';
import { UserRepository } from '../domain/repositories/user.repository';
import { AuthService } from '../../auth/application/services/auth.service';

export class UserLogin {
  constructor(
    private readonly repository: UserRepository,
    private readonly authService: AuthService,
  ) {}

  async run(email: string, password: string): Promise<IUserLogged | null> {
    const userData = await this.repository.login(email, password);
    
    if (!userData) {
      throw new UserNotFound('user not found');
    }

    const token = await this.authService.sign(userData.id, userData.username);

    return {
      ...userData,
      token
    };
  }
}