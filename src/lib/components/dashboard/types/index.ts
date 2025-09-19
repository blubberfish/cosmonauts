import type { Session, User } from "better-auth";

export interface Authorization {
  session: Session;
  user: User;
}
