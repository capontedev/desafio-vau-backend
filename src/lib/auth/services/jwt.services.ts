import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRECT as string;

export class JwtService {
  sign(sub: string, name: string): string {
    return jwt.sign({
      sub,
      name,
      exp: Date.now() + 60 * 1000
    }, secret)
  }
  
  verify(token: string): string | null {
    try {
      jwt.verify(token, secret);
      return token;
    } catch (error) {
      return null;
    }
  }
}
