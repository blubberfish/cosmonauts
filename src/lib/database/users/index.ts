import { Session } from "next-auth";
import { MongoDB } from "../mongo";

export class Users extends MongoDB {
  get profiles() {
    return this.users.collection("profiles");
  }

  get mappings() {
    return this.users.collection("mappings");
  }

  async getProfile(session: Session) {
    const provider = session.meta?.provider;
    const alias = session.meta?.sub;
    if (!provider || !alias) {
      return {
        profile: null,
        reason: "BAD REQUEST - no provider or alias",
      };
    }
    const projection = { _id: 0, mappings: 0 };
    const mappings = {
      [provider]: alias,
    };
    const profile = await this.profiles.findOne(
      {
        mappings,
      },
      { projection }
    );
    if (profile) {
      return { profile };
    }
    await this.profiles.insertOne({
      createdAt: new Date(),
      mappings,
    });
    return {};
  }
}
