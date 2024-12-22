import { model, Schema } from 'mongoose';

const Users = new Schema(
  {
    username: { type: String },
    email: { type: String },
    password: { type: String },
  },
);

export default model('Users', Users, 'users');
