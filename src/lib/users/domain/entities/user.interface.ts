export interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
  token?: string;
}

export interface IUserLogin {
  email: string;
  password: string;
};

export type IUserCreate = Omit<IUser, 'id' | 'token'>;
export type IUserCreated = Omit<IUser, 'password' | 'token'>;
export type IUserLogged = Omit<IUser, 'password'>;
