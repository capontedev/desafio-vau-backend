import { Db } from 'mongodb';
import { connect, connection } from 'mongoose';

class MongoDB {
  db?: Db;
  async init(): Promise<Db | undefined> {
    console.log('=== DATABASE ===');
    const url = process.env.MONGO_DB_URL;
    const dbName = process.env.MONGO_DB_NAME;
    const dbProtocol = process.env.MONGO_DB_PROTOCOL;
    const uri = `${dbProtocol}://${url}`;

    try {
      await connect(uri, {
        ssl: false,
        appName: 'vau',
        dbName,
      });

      this.db = connection.db;
      console.log(`STATUS: Online`);
      console.log(`DATABASE: ${dbName}`);
    } catch (error) {
      console.log(`Error ${error}`);
      console.log(`STATUS: Offline`);
      console.log(`DATABASE: ${dbName}`);
    }

    return this.db;
  }
}

export default MongoDB;
