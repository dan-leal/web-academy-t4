import { User } from "@prisma/client";

export type SingupDTO = Pick<User, "email" | "name" | "password">;
export type LoginDTO = Pick<User, "email" | "password">;
