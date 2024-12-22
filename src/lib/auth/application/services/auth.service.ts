import { Unauthorized } from '../../../shared/errors/unauthorized';
import { JwtService } from '../../services/jwt.services';

export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async sign(id: string, usename: string): Promise<string> {
    return this.jwtService.sign(id, usename);;
  }

  async verify(token: string | null): Promise<string> {
    if (!token) {
      throw new Unauthorized();
    }

    const verified = this.jwtService.verify(token);

    if (!verified) {
      throw new Unauthorized();
    }

    return token;
  }
}