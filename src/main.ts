import express, { NextFunction, Request, Response } from 'express';
import { expressUserRouter } from './lib/users/adapters/router/user.router';

const app = express();

app.use(express.json());
app.use(expressUserRouter);

app.use(
  (
   err: unknown,
   req: Request,
   res: Response,
   next: NextFunction
  ) => {
    if (err instanceof Error) {
      console.error(err.stack);
      res.status(500).send({ message: err.message });
    }

    console.error(err);
    res.status(500).send({ message: 'Something broke!' });
  }
)

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})

