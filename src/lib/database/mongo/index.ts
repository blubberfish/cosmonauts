import { MongoClient } from "mongodb";

export class MongoDB {
  static client = new MongoClient(process.env.MONGO_DB_URI || "", {});

  get users() {
    return MongoDB.client.db("users");
  }
}
