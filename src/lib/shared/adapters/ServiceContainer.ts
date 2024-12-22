
import { AuthService } from '../../auth/application/services/auth.service';
import { JwtService } from '../../auth/services/jwt.services';
import { UserCreate } from '../../users/applicaton/user.create';
import { UserLogin } from '../../users/applicaton/user.login';
import { UserGetAll } from '../../users/applicaton/user.get-all';
import MongoDB from './output/persistence/mongo.db';
import { MongoUserRepository } from '../../users/adapters/output/repositories/mongo.user.repository';
//import { InMemoryUserRepository } from '../../users/adapters/output/repositories/in-memory.user.repository';

//const userRepository = new InMemoryUserRepository();

const db = (async() => await new MongoDB().init())();
const userRepository = new MongoUserRepository();
const authService = new AuthService(new JwtService());

export const ServiceContainer = {
  user: {
    create: new UserCreate(userRepository),
    login: new UserLogin(userRepository, authService),
    getAll: new UserGetAll(userRepository, authService),
  }
}