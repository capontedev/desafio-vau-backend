import { IUserCreated } from '../domain/entities/user.interface';
import { UserRepository } from '../domain/repositories/user.repository';
import { AuthService } from '../../auth/application/services/auth.service';

export class UserGetAll {
  constructor(
    private readonly repository: UserRepository,
    private readonly authService: AuthService,
  ) {}

  async run(token: string | null): Promise<IUserCreated[]> {
    await this.authService.verify(token);
    return this.repository.getAll();
  }
}